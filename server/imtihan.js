var imtihan = {};

imtihan.testFile = function(t){
  t = t || [];
  for (var i=0;i<t.length;i++){
    var d = "";
    d += 'describe("'+t[i].funcName+'",function(){\n';
      for (var j=0;j<t[i].tests.length;j++){
        d += '  it("'+t[i].tests[j].message+'",function(){\n';
        d += '    expect('+t[i].tests[j].target+').'+t[i].tests[j].suffix+';\n';
        d += '   });\n';
      }
    d += '});\n';
  }
  return d;
};


imtihan.indexFile = function(){
  var d = "";
  d += "<!doctype html> \n";
  d += "    <html> \n";
  d += "    <head> \n";
  d += "      <meta charset='utf-8'> \n";
  d += "        <meta http-equiv='X-UA-Compatible' content='IE=edge'> \n";
  d += "          <title>Mocha Spec Runner</title> \n";
  d += "            <link rel='stylesheet' href='./mocha.css'> \n";
  d += "            </head> \n";
  d += "            <body> \n";
  d += "              <div id='mocha'></div> \n";
  d += "                <script src='./mocha.js'></script> \n";
  d += "                  <script>mocha.setup('')</script> \n";
  d += "                    <script src='./chai.js'></script> \n";
  d += "                      <script> \n";
  d += "                          var assert = chai.assert; \n";
  d += "      var expect = chai.expect; \n";
  d += "          var should = chai.should(); \n";
  d += "            </script> \n";
  d += " \n";
  d += "                <!-- include source files here... --> \n";
  d += "                  <script src='../src/index.js'></script> \n";
  d += " \n";
  d += "                    <!-- include spec files here... --> \n";
  d += "                      <script src='test.js'></script> \n";
  d += " \n";
  d += "                        <script>mocha.run()</script> \n";
  d += "                        </body> \n";
  d += "                        </html> \n";

  return d;
};

module.exports = imtihan;
