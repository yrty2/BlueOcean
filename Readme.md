四元数の四則演算とループ処理が行える程度のwebで使えるプログラミング言語

コード(BlueOcean)->コンパイル(js)->評価(webAssembly)

構文解析の部分は自作のライブラリmidoriを元にしています。

ちなみにblueoceanはjsより基本的に遅いのでsimdが使えるくらいしか旨味はないです。

# 使い方

oceanCompiler.jsをダウンロード

blueocean.parse("filepath.bo",imports,必要であればcallback)で実行

または、blueocean.call("yourcode",imports)でも可

importsは、

```javascript:js
[
  {
    call:add(x,y){return x+y}, //js関数
    param:["R","R"], //引数のbo型
    result:["R"] //返り値のbo型
  }
]
```

という風に書きます

ブルーオーシャン内では、

```blueocean
print add(1+2) //インポートした関数名
```

という風に使えます。
