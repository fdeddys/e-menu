# install gradle
# set path gradle di .profile
# PATH = :/usr/share/gradle/bin


ionic cordova run android -l

ionic cordova platform add android

ionic cordova build android --prod --release

keytool -genkey -v -keystore my-release-key.keystore -alias deddy_apk_2 -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk deddy_apk_2

/home/deddy/Android/Sdk/build-tools/28.0.3/zipalign -v 4 app-release-unsigned.apk Deddy2.apk


firebase init

ionic build
firebase deploy