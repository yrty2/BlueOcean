関数宣言とループ処理が行える程度のwebで使えるプログラミング言語

コード(BlueOcean)->コンパイル(js)->評価(webAssembly)

構文解析の部分は自作のライブラリmidoriを元にしています。

ちなみにblueoceanはjsより基本的に遅いのでsimdが使えるくらいしか旨味はないです。

# 使い方

oceanCompiler.jsをダウンロード

```javascript
blueocean.parse("filepath.bo",imports/*必要であれば,callbackfunction*/)
```

または、

```javascript
blueocean.call("yourcode",imports)
```

importsは、

```javascript
[
  {
    call:function add(x,y){return x+y}, //js関数
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
