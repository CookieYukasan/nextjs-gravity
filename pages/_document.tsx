import Document, { DocumentProps, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
