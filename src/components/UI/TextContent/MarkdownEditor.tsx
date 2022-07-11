import React, { ChangeEvent, useContext, useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.scss';
import DataContext from '../../../context/data-context';
import TextArea from 'textarea-autosize-reactjs';

const MarkdownEditor: React.FC<MarkdownEditorProps> = (props) => {
  const ctx = useContext(DataContext);
  const dummyData = ctx.files[0].content;
  const { className, mobileShowPreview } = props;

  const [markdownText, setMarkdownText] = useState(dummyData);

  const markdownTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

interface MarkdownEditorProps {
  className: string;
  mobileShowPreview: boolean;
}
export default MarkdownEditor;
