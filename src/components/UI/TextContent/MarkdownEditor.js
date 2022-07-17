import React, { ChangeEvent, useContext, useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.scss';
import DataContext from '../../../context/data-context';
import TextArea from 'textarea-autosize-reactjs';
import defaultData from '../../../data.json';

const defaultFile = defaultData[0];

const MarkdownEditor = (props) => {
  const dataContext = useContext(DataContext);
  const files = dataContext.files;

  const activeFile = files.find((file) => file.isActive);

  const { className, mobileShowPreview } = props;

  const [markdownText, setMarkdownText] = useState(
    activeFile.content || defaultFile.content
  );

  const markdownTextChangeHandler = (e) => {
    setMarkdownText(e.target.value);
  };

  const mobileShowPreviewClass = mobileShowPreview ? 'show-mobile-view' : '';

  return (
    <div className={`main__editor ${mobileShowPreviewClass}`}>
      <TextArea
        // cols={100}
        // rows={100}
        onChange={markdownTextChangeHandler}
        className={`main__editor-textarea ${className}`}
        value={markdownText}
      ></TextArea>
      <div
        className='main__editor-preview'
        dangerouslySetInnerHTML={{ __html: marked.parse(markdownText) }}
      />
    </div>
  );
};

export default MarkdownEditor;
