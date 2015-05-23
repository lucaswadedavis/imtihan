var imtihan = {};

imtihan.testFile = function(func,t){
  func = func || 'x()';
  t = t || {};
  t.message = t.message || "should adhere to the shadow pact.";
  t.target = t.target || "x(42)";
  t.suffix = t.suffix || "to.be.a('string')";

  var d = "";
  d += 'describe("'+func+'",function(){\n';
  d += '  it("'+t.message+'",function(){\n';
  d += '    expect('+t.target+').'+t.suffix+';\n';
  d += '   });\n';
  d += '});\n';
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
