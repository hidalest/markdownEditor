import React, { ChangeEvent, useContext, useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.scss';
import DataContext from '../../../context/data-context';

const MarkdownEditor: React.FC<MarkdownEditorProps> = (props) => {
  const ctx = useContext(DataContext);
  const dummyData = ctx.files[0].content;
  const { className } = props;

  const [markdownText, setMarkdownText] = useState(dummyData);

  const markdownTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
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
      <div
        className='main__editor-preview'
        dangerouslySetInnerHTML={{ __html: marked.parse(markdownText) }}
      />
    </div>
  );
};

interface MarkdownEditorProps {
  className: string;
}
export default MarkdownEditor;
