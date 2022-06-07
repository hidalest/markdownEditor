import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import marked from 'markdown-it';
import './MarkdownEditor.scss';

const MarkdownEditor: React.FC<MarkdownEditorProps> = (props) => {
  const { onChange, className } = props;

  const [markdownText, setMarkdownText] = useState('');

  const markdownTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
    console.log(markdownText);
  };

  return (
    <div className='main__editor'>
      <textarea
        cols={30}
        rows={10}
        onChange={markdownTextChangeHandler}
        className={`main__editor-textarea ${className}`}
        value={markdownText}
      ></textarea>
      <div className='main__editor-preview'>{marked.parse(markdownText)}</div>
    </div>
  );
};

interface MarkdownEditorProps {
  onChange: ChangeEventHandler;
  className: string;
}
export default MarkdownEditor;
