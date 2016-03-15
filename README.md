This repo is for make team tech radar, and make it visiable. 

#### 1. bundle install
	$bundle install

Make sure update ruby gem to **v2.1.0** or higher version,otherwise may cause some error(eg:"flat namespace" when running grard)

#### 2. Install bower

	$npm install -g bower
Make sure you have node/npm installed, if not, refer <https://nodejs.org/en/>

#### 3. Install packages by bower
	bower install
Refer <http://bower.io/> for more information

#### 5. run guard
	$bundle exec guard
Guard can help compile and reload project automatically.After start guard, once you made any changes, you can see the changes on webpage by refresh the page, without compile manually.

Refer <https://github.com/guard/guard#readme> for more information.

#### 6. Open index.html in browser
**Touble shooting**

"jquery.js:8630XMLHttpRequest cannot load file:///***/t-hack-day-skillsets.json..."

**Try below steps if this error shows in console**

 Step 1. open chrome from command line with argument 
 
   	$cd /Applications/Google Chrome.app/Contents/MacOS
   	$/Google\ Chrome --allow-file-access-from-files

 Step 2. Open index.html in previous browser
 
 

