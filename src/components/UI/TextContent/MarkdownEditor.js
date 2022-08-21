import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.scss';
import TextArea from 'textarea-autosize-reactjs';
import { useDispatch } from 'react-redux';
import { filesActions } from '../../../store';

const MarkdownEditor = (props) => {
  const { className, mobileShowPreview, activeFile } = props;
  const { content } = activeFile;
  const [markdownText, setMarkdownText] = useState(content);
  const dispatch = useDispatch();

  useEffect(() => {
    setMarkdownText(content);
  }, [content]);

  const markdownTextChangeHandler = (e) => {
    setMarkdownText(e.target.value);
    dispatch(
      filesActions.updateCurrentFileContent({ content: e.target.value })
    );
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
