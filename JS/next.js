【nextjs-blog】
    Nest.js は画像コンポーネントと画像の最適化をしてくれる
    next/scriptを使用すると #サードパーティのJavaScript のロードが簡素化される
    #CSSモジュール の利点
        ・名前の衝突を避けるために一意のクラス名を生成する 
        ・スタイルをコンポーネントレベルでスコープする
    #グローバルCSS は /_app.js 内のみにインポートできる

　　#ユーティリティ関数 とは
      ユーティリティ関数は、よく使う処理を簡単に呼び出せるように作成される小さな関数のこと。

    #ダイナミックルート 
        `getStaticPaths` => ID の配列を取得し、`getStaticProps` => データを取得します。

    #デプロイ
        Vercelは Next.js の作成者によって作成されており、Next.js に対する一流のサポートを備えています。Next.js アプリをVercelにデプロイすると、デフォルトで次のことが起こります。
        
        静的生成とアセット (JS、CSS、画像、フォントなど)を使用するページは、非常に高速なVercel Edge Networkから自動的に提供されます。
        サーバーサイド レンダリングとAPI ルートを使用するページは、自動的に分離されたサーバーレス関数になります。これにより、ページのレンダリングと API リクエストを無限に拡張できるようになります。
