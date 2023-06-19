# MicroProfile generated Application

## Introduction

MicroProfile Starter has generated this MicroProfile application for you.

The generation of the executable jar file can be performed by issuing the following command


    mvn clean package

This will create an executable jar file **microprofile_db_access.jar** within the _target_ maven folder. This can be started by executing the following command

    java -jar target/microprofile_db_access.jar



### Liberty Dev Mode

During development, you can use Liberty's development mode (dev mode) to code while observing and testing your changes on the fly.
With the dev mode, you can code along and watch the change reflected in the running server right away; 
unit and integration tests are run on pressing Enter in the command terminal; you can attach a debugger to the running server at any time to step through your code.


    mvn liberty:dev





To launch the test page, open your browser at the following URL

    http://localhost:9080/index.html  



## Specification examples

By default, there is always the creation of a JAX-RS application class to define the path on which the JAX-RS endpoints are available.

Also, a simple Hello world endpoint is created, have a look at the class **HelloController**.

More information on MicroProfile can be found [here](https://microprofile.io/)


## Certification registration

Work in the directory: 

`MavenProjects\microprofile_db_access\target\liberty\wlp\usr\servers\microprofile_db_access\resources\security>`

Get OSM-Certificate

`echo q | openssl s_client -showcerts -connect nominatim.openstreetmap.org:443 > output.txt`

Extract the first key to file *Key.txt*

Import OSM-Certificate

`keytool -importcert -file Key.txt -alias osm -keystore public.jks -storetype jks`

Password: *atbash*

You can move the *public.jks* to a *save* directory and register the name in *server.xml*

`<keyStore id="defaultKeyStore" location="${server.config.dir}/public.jks" type="JKS" password="atbash" />`

 &lt;keyStore id="defaultKeyStore" location="${server.config.dir}/public.jks" type="JKS" password="atbash" /&gt;`



