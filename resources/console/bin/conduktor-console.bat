@REM conduktor-console launcher script
@REM
@REM Environment:
@REM JAVA_HOME - location of a JDK home dir (optional if java on path)
@REM CFG_OPTS  - JVM options (optional)
@REM Configuration:
@REM CONDUKTOR_CONSOLE_config.txt found in the CONDUKTOR_CONSOLE_HOME.
@setlocal enabledelayedexpansion
@setlocal enableextensions

@echo off


if "%CONDUKTOR_CONSOLE_HOME%"=="" (
  set "APP_HOME=%~dp0\\.."

  rem Also set the old env name for backwards compatibility
  set "CONDUKTOR_CONSOLE_HOME=%~dp0\\.."
) else (
  set "APP_HOME=%CONDUKTOR_CONSOLE_HOME%"
)

set "APP_LIB_DIR=%APP_HOME%\lib\"

rem Detect if we were double clicked, although theoretically A user could
rem manually run cmd /c
for %%x in (!cmdcmdline!) do if %%~x==/c set DOUBLECLICKED=1

rem FIRST we load the config file of extra options.
set "CFG_FILE=%APP_HOME%\CONDUKTOR_CONSOLE_config.txt"
set CFG_OPTS=
call :parse_config "%CFG_FILE%" CFG_OPTS

rem We use the value of the JAVA_OPTS environment variable if defined, rather than the config.
set _JAVA_OPTS=%JAVA_OPTS%
if "!_JAVA_OPTS!"=="" set _JAVA_OPTS=!CFG_OPTS!

rem We keep in _JAVA_PARAMS all -J-prefixed and -D-prefixed arguments
rem "-J" is stripped, "-D" is left as is, and everything is appended to JAVA_OPTS
set _JAVA_PARAMS=
set _APP_ARGS=

set "APP_CLASSPATH=%APP_LIB_DIR%\io.conduktor.console.app-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.self-init-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.model-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.glue-zio2-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.consumer-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.config-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.platform-license-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.database-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolscommon-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.utils-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.tapir-common-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.permissions-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.adminapi-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.public-api-tapir-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolsmodel-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.auth-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.admin-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.alerting-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.admin-repository-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.audit-log-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.datamasking-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.test-kit-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.selfserve-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolskafkaadmin-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolsdb-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolsadapters-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.kafka-ssl-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.console-indexer-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.etlapi-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.authenticator-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.app-commons-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolsapi-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolsconsumer-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.devtoolsproducer-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.governance-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.monitoring-api-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.analytics-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\io.conduktor.console.kafkasql-af1db7ccd2fc501a325996b17a4b0bb801ef3890.jar;%APP_LIB_DIR%\org.scala-lang.scala3-library_3-3.5.1.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-files_3-1.11.7.jar;%APP_LIB_DIR%\dev.zio.zio-prelude_3-1.0.0-RC31.jar;%APP_LIB_DIR%\dev.zio.zio-config_3-4.0.2.jar;%APP_LIB_DIR%\dev.zio.zio-config-magnolia_3-4.0.2.jar;%APP_LIB_DIR%\dev.zio.zio-config-typesafe_3-4.0.2.jar;%APP_LIB_DIR%\dev.zio.zio-config-refined_3-4.0.2.jar;%APP_LIB_DIR%\eu.timepit.refined_3-0.11.2.jar;%APP_LIB_DIR%\dev.zio.zio-config-yaml_3-4.0.2.jar;%APP_LIB_DIR%\dev.zio.zio_3-2.1.11.jar;%APP_LIB_DIR%\org.postgresql.postgresql-42.7.4.jar;%APP_LIB_DIR%\org.http4s.http4s-dsl_3-0.23.28.jar;%APP_LIB_DIR%\org.http4s.http4s-blaze-server_3-0.23.16.jar;%APP_LIB_DIR%\org.http4s.http4s-blaze-client_3-0.23.16.jar;%APP_LIB_DIR%\org.http4s.http4s-circe_3-0.23.28.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-enumeratum_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-http4s-server-zio_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-json-circe_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-refined_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-sttp-client_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-prometheus-metrics_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-zio-metrics_3-1.11.7.jar;%APP_LIB_DIR%\io.circe.circe-core_3-0.14.10.jar;%APP_LIB_DIR%\io.circe.circe-generic_3-0.14.10.jar;%APP_LIB_DIR%\io.circe.circe-parser_3-0.14.10.jar;%APP_LIB_DIR%\io.circe.circe-refined_3-0.15.1.jar;%APP_LIB_DIR%\io.circe.circe-literal_3-0.14.10.jar;%APP_LIB_DIR%\com.beachape.enumeratum-circe_3-1.7.5.jar;%APP_LIB_DIR%\eu.timepit.refined-cats_3-0.11.2.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.core_3-3.10.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.circe_3-3.10.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.zio_3-3.10.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.slf4j-backend_3-3.10.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.fs2_3-3.10.0.jar;%APP_LIB_DIR%\dev.zio.zio-logging-slf4j2_3-2.3.1.jar;%APP_LIB_DIR%\ch.qos.logback.logback-classic-1.5.10.jar;%APP_LIB_DIR%\net.logstash.logback.logstash-logback-encoder-8.0.jar;%APP_LIB_DIR%\org.slf4j.jul-to-slf4j-2.0.16.jar;%APP_LIB_DIR%\org.slf4j.log4j-over-slf4j-2.0.16.jar;%APP_LIB_DIR%\org.slf4j.jcl-over-slf4j-2.0.16.jar;%APP_LIB_DIR%\org.slf4j.slf4j-api-2.0.16.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-databind-2.14.3.jar;%APP_LIB_DIR%\org.pac4j.pac4j-oidc-6.0.6.jar;%APP_LIB_DIR%\org.pac4j.pac4j-http-6.0.6.jar;%APP_LIB_DIR%\org.http4s.http4s-ember-server_3-0.23.28.jar;%APP_LIB_DIR%\org.http4s.http4s-ember-client_3-0.23.28.jar;%APP_LIB_DIR%\org.ldaptive.ldaptive-2.3.2.jar;%APP_LIB_DIR%\commons-codec.commons-codec-1.17.1.jar;%APP_LIB_DIR%\com.github.jwt-scala.jwt-circe_3-10.0.1.jar;%APP_LIB_DIR%\io.github.hakky54.sslcontext-kickstart-8.3.7.jar;%APP_LIB_DIR%\io.github.hakky54.sslcontext-kickstart-for-pem-8.3.7.jar;%APP_LIB_DIR%\com.github.blemale.scaffeine_3-5.3.0.jar;%APP_LIB_DIR%\io.sentry.sentry-7.15.0.jar;%APP_LIB_DIR%\io.sentry.sentry-logback-7.15.0.jar;%APP_LIB_DIR%\org.tpolecat.doobie-core_3-1.0.0-RC5.jar;%APP_LIB_DIR%\org.tpolecat.doobie-postgres-circe_3-1.0.0-RC5.jar;%APP_LIB_DIR%\org.tpolecat.doobie-postgres_3-1.0.0-RC5.jar;%APP_LIB_DIR%\org.tpolecat.doobie-refined_3-1.0.0-RC5.jar;%APP_LIB_DIR%\io.github.gaelrenoux.tranzactio-doobie_3-5.2.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient-0.16.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_common-0.16.0.jar;%APP_LIB_DIR%\com.segment.analytics.java.analytics-3.5.1.jar;%APP_LIB_DIR%\com.dimafeng.testcontainers-scala-kafka_3-0.41.4.jar;%APP_LIB_DIR%\dev.zio.zio-kafka_3-2.7.3.jar;%APP_LIB_DIR%\org.scala-lang.scala-library-2.13.14.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-core_3-1.11.7.jar;%APP_LIB_DIR%\dev.zio.zio-prelude-macros_3-1.0.0-RC31.jar;%APP_LIB_DIR%\dev.zio.zio-streams_3-2.1.11.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-zio-prelude_3-1.11.7.jar;%APP_LIB_DIR%\com.github.ghostdogpr.caliban_3-2.7.2.jar;%APP_LIB_DIR%\org.gnieh.diffson-circe_3-4.6.0.jar;%APP_LIB_DIR%\com.tersesystems.securitybuilder.securitybuilder-1.0.1.jar;%APP_LIB_DIR%\com.github.japgolly.nyaya.nyaya-gen_3-1.1.0.jar;%APP_LIB_DIR%\com.47deg.memeid4s_3-0.8.0.jar;%APP_LIB_DIR%\io.confluent.kafka-schema-registry-client-7.7.1.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-cats_3-1.11.7.jar;%APP_LIB_DIR%\com.sksamuel.avro4s.avro4s-core_3-5.0.9.jar;%APP_LIB_DIR%\com.47deg.memeid4s-literal_3-0.8.0.jar;%APP_LIB_DIR%\org.springframework.security.spring-security-crypto-6.3.3.jar;%APP_LIB_DIR%\org.bouncycastle.bcpkix-jdk18on-1.78.1.jar;%APP_LIB_DIR%\com.beachape.enumeratum_3-1.7.5.jar;%APP_LIB_DIR%\io.circe.circe-yaml_3-1.15.0.jar;%APP_LIB_DIR%\org.testcontainers.postgresql-1.20.2.jar;%APP_LIB_DIR%\dev.zio.zio-interop-cats_3-23.1.0.3.jar;%APP_LIB_DIR%\com.zaxxer.HikariCP-6.0.0.jar;%APP_LIB_DIR%\org.flywaydb.flyway-core-10.19.0.jar;%APP_LIB_DIR%\org.flywaydb.flyway-database-postgresql-10.19.0.jar;%APP_LIB_DIR%\software.amazon.awssdk.glue-2.28.21.jar;%APP_LIB_DIR%\dev.zio.zio-cache_3-0.2.3.jar;%APP_LIB_DIR%\com.google.protobuf.protobuf-java-3.25.5.jar;%APP_LIB_DIR%\com.google.protobuf.protobuf-java-util-3.25.5.jar;%APP_LIB_DIR%\com.google.code.gson.gson-2.11.0.jar;%APP_LIB_DIR%\com.github.erosb.everit-json-schema-1.14.4.jar;%APP_LIB_DIR%\com.github.curious-odd-man.rgxgen-2.0.jar;%APP_LIB_DIR%\org.apache.avro.avro-1.12.0.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-collection-compat_3-2.12.0.jar;%APP_LIB_DIR%\dev.zio.zio-config-derivation_3-4.0.2.jar;%APP_LIB_DIR%\com.typesafe.config-1.4.3.jar;%APP_LIB_DIR%\org.snakeyaml.snakeyaml-engine-2.6.jar;%APP_LIB_DIR%\io.seruco.encoding.base62-0.1.3.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-openapi-docs_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.apispec.openapi-circe-yaml_3-0.11.3.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-swagger-ui_3-1.11.7.jar;%APP_LIB_DIR%\com.github.jsqlparser.jsqlparser-5.0.jar;%APP_LIB_DIR%\dev.zio.zio-internal-macros_3-2.1.11.jar;%APP_LIB_DIR%\dev.zio.zio-stacktracer_3-2.1.11.jar;%APP_LIB_DIR%\dev.zio.izumi-reflect_3-2.3.9.jar;%APP_LIB_DIR%\org.checkerframework.checker-qual-3.42.0.jar;%APP_LIB_DIR%\org.http4s.http4s-core_3-0.23.28.jar;%APP_LIB_DIR%\org.http4s.http4s-blaze-core_3-0.23.16.jar;%APP_LIB_DIR%\org.http4s.http4s-server_3-0.23.28.jar;%APP_LIB_DIR%\org.http4s.http4s-client_3-0.23.28.jar;%APP_LIB_DIR%\org.http4s.http4s-jawn_3-0.23.28.jar;%APP_LIB_DIR%\io.circe.circe-jawn_3-0.14.10.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-zio_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-http4s-server_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-client_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-server_3-1.11.7.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-core-1.3.1.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-exposition-formats-1.3.1.jar;%APP_LIB_DIR%\io.circe.circe-numbers_3-0.14.10.jar;%APP_LIB_DIR%\org.typelevel.cats-core_3-2.12.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.model.core_3-1.7.11.jar;%APP_LIB_DIR%\com.softwaremill.sttp.shared.core_3-1.3.22.jar;%APP_LIB_DIR%\com.softwaremill.sttp.shared.ws_3-1.3.22.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.json-common_3-3.10.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.shared.zio_3-1.3.22.jar;%APP_LIB_DIR%\dev.zio.zio-interop-reactivestreams_3-2.0.2.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.cats_3-3.10.0.jar;%APP_LIB_DIR%\co.fs2.fs2-core_3-3.11.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.shared.fs2_3-1.3.22.jar;%APP_LIB_DIR%\co.fs2.fs2-reactive-streams_3-3.11.0.jar;%APP_LIB_DIR%\co.fs2.fs2-io_3-3.11.0.jar;%APP_LIB_DIR%\dev.zio.zio-logging_3-2.3.1.jar;%APP_LIB_DIR%\ch.qos.logback.logback-core-1.5.10.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-annotations-2.17.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-core-2.17.2.jar;%APP_LIB_DIR%\org.pac4j.pac4j-core-6.0.6.jar;%APP_LIB_DIR%\com.nimbusds.oauth2-oidc-sdk-11.18.jar;%APP_LIB_DIR%\com.nimbusds.nimbus-jose-jwt-9.40.jar;%APP_LIB_DIR%\com.google.guava.guava-33.2.1-jre.jar;%APP_LIB_DIR%\org.springframework.spring-core-6.1.11.jar;%APP_LIB_DIR%\com.google.code.findbugs.findbugs-annotations-3.0.1.jar;%APP_LIB_DIR%\org.http4s.http4s-ember-core_3-0.23.28.jar;%APP_LIB_DIR%\org.typelevel.log4cats-slf4j_3-2.7.0.jar;%APP_LIB_DIR%\org.typelevel.keypool_3-0.4.10.jar;%APP_LIB_DIR%\io.netty.netty-handler-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-epoll-4.1.110.Final-linux-x86_64.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-epoll-4.1.110.Final-linux-aarch_64.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-kqueue-4.1.110.Final-osx-x86_64.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-kqueue-4.1.110.Final-osx-aarch_64.jar;%APP_LIB_DIR%\com.github.jwt-scala.jwt-json-common_3-10.0.1.jar;%APP_LIB_DIR%\com.github.ben-manes.caffeine.caffeine-3.1.8.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-java8-compat_3-1.0.2.jar;%APP_LIB_DIR%\javassist.javassist-3.12.1.GA.jar;%APP_LIB_DIR%\dev.zio.zio-opentelemetry_3-2.0.3.jar;%APP_LIB_DIR%\software.amazon.msk.aws-msk-iam-auth-2.2.0.jar;%APP_LIB_DIR%\org.gnieh.fs2-data-json-circe_3-1.11.1.jar;%APP_LIB_DIR%\org.sourcelab.kafka-connect-client-4.0.5.jar;%APP_LIB_DIR%\com.github.ghostdogpr.caliban-tools_3-2.7.2.jar;%APP_LIB_DIR%\org.tpolecat.typename_3-1.1.0.jar;%APP_LIB_DIR%\dev.zio.zio-metrics-connectors_3-2.3.1.jar;%APP_LIB_DIR%\dev.zio.zio-metrics-connectors-prometheus_3-2.3.1.jar;%APP_LIB_DIR%\com.github.ghostdogpr.caliban-tapir_3-2.7.2.jar;%APP_LIB_DIR%\org.typelevel.cats-free_3-2.12.0.jar;%APP_LIB_DIR%\org.tpolecat.doobie-free_3-1.0.0-RC5.jar;%APP_LIB_DIR%\io.github.gaelrenoux.tranzactio-core_3-5.2.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_tracer_otel-0.16.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_tracer_otel_agent-0.16.0.jar;%APP_LIB_DIR%\com.segment.analytics.java.analytics-core-3.5.1.jar;%APP_LIB_DIR%\com.squareup.okhttp3.okhttp-4.10.0.jar;%APP_LIB_DIR%\com.squareup.okhttp3.logging-interceptor-4.10.0.jar;%APP_LIB_DIR%\com.squareup.retrofit2.converter-gson-2.9.0.jar;%APP_LIB_DIR%\com.squareup.retrofit2.retrofit-mock-2.9.0.jar;%APP_LIB_DIR%\com.segment.backo.backo-1.0.0.jar;%APP_LIB_DIR%\com.dimafeng.testcontainers-scala-core_3-0.41.4.jar;%APP_LIB_DIR%\org.testcontainers.kafka-1.19.1.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-clients-3.6.2.jar;%APP_LIB_DIR%\com.softwaremill.magnolia1_3.magnolia_3-1.3.7.jar;%APP_LIB_DIR%\software.amazon.awssdk.sts-2.28.21.jar;%APP_LIB_DIR%\io.conduktor.azure-kafka-oauthbearer-0.2.0.jar;%APP_LIB_DIR%\com.azure.azure-identity-1.14.0.jar;%APP_LIB_DIR%\org.apache.commons.commons-lang3-3.17.0.jar;%APP_LIB_DIR%\net.thisptr.jackson-jq-0.0.13.jar;%APP_LIB_DIR%\org.graalvm.sdk.graal-sdk-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.js.js-scriptengine-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.truffle.truffle-api-24.1.0.jar;%APP_LIB_DIR%\org.msgpack.msgpack-core-0.9.8.jar;%APP_LIB_DIR%\org.msgpack.jackson-dataformat-msgpack-0.9.8.jar;%APP_LIB_DIR%\io.confluent.kafka-avro-serializer-7.7.1.jar;%APP_LIB_DIR%\io.confluent.kafka-protobuf-serializer-7.7.1.jar;%APP_LIB_DIR%\io.confluent.kafka-json-schema-serializer-7.7.1.jar;%APP_LIB_DIR%\software.amazon.glue.schema-registry-serde-1.1.20-cdk2.jar;%APP_LIB_DIR%\com.github.ghostdogpr.caliban-macros_3-2.7.2.jar;%APP_LIB_DIR%\com.lihaoyi.fastparse_3-3.1.0.jar;%APP_LIB_DIR%\dev.zio.zio-query_3-0.7.1.jar;%APP_LIB_DIR%\org.gnieh.diffson-core_3-4.6.0.jar;%APP_LIB_DIR%\org.slieb.throwable-interfaces-1.13.jar;%APP_LIB_DIR%\com.github.japgolly.nyaya.nyaya-util_3-1.1.0.jar;%APP_LIB_DIR%\com.github.japgolly.microlibs.multimap_3-4.2.1.jar;%APP_LIB_DIR%\com.github.japgolly.microlibs.recursion_3-4.2.1.jar;%APP_LIB_DIR%\dev.optics.monocle-core_3-3.2.0.jar;%APP_LIB_DIR%\com.47deg.memeid-0.8.0.jar;%APP_LIB_DIR%\org.yaml.snakeyaml-2.2.jar;%APP_LIB_DIR%\org.apache.commons.commons-compress-1.26.0.jar;%APP_LIB_DIR%\io.swagger.core.v3.swagger-annotations-2.1.10.jar;%APP_LIB_DIR%\io.confluent.common-utils-7.7.1.jar;%APP_LIB_DIR%\org.bouncycastle.bcprov-jdk18on-1.78.1.jar;%APP_LIB_DIR%\org.bouncycastle.bcutil-jdk18on-1.78.1.jar;%APP_LIB_DIR%\com.beachape.enumeratum-macros_3-1.7.5.jar;%APP_LIB_DIR%\io.circe.circe-yaml-common_3-1.15.0.jar;%APP_LIB_DIR%\org.testcontainers.jdbc-1.20.2.jar;%APP_LIB_DIR%\dev.zio.zio-interop-tracer_3-23.1.0.3.jar;%APP_LIB_DIR%\dev.zio.zio-managed_3-2.1.7.jar;%APP_LIB_DIR%\org.typelevel.cats-effect-std_3-3.5.4.jar;%APP_LIB_DIR%\org.typelevel.cats-mtl_3-1.4.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.dataformat.jackson-dataformat-toml-2.15.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.datatype.jackson-datatype-jsr310-2.17.2.jar;%APP_LIB_DIR%\software.amazon.awssdk.aws-json-protocol-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.protocol-core-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.http-auth-aws-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.sdk-core-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.auth-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.http-auth-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.http-auth-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.identity-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.http-client-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.regions-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.annotations-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.utils-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.aws-core-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.metrics-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.json-utils-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.endpoints-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.retries-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.apache-client-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.netty-nio-client-2.28.21.jar;%APP_LIB_DIR%\com.google.code.findbugs.jsr305-3.0.2.jar;%APP_LIB_DIR%\com.google.errorprone.error_prone_annotations-2.27.0.jar;%APP_LIB_DIR%\com.google.j2objc.j2objc-annotations-3.0.0.jar;%APP_LIB_DIR%\org.json.json-20231013.jar;%APP_LIB_DIR%\commons-validator.commons-validator-1.8.0.jar;%APP_LIB_DIR%\com.damnhandy.handy-uri-templates-2.1.8.jar;%APP_LIB_DIR%\com.google.re2j.re2j-1.6.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-storage-3.6.2.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-apispec-docs_3-1.11.7.jar;%APP_LIB_DIR%\com.softwaremill.quicklens.quicklens_3-1.9.9.jar;%APP_LIB_DIR%\com.softwaremill.sttp.apispec.openapi-model_3-0.11.3.jar;%APP_LIB_DIR%\com.softwaremill.sttp.apispec.openapi-circe_3-0.11.3.jar;%APP_LIB_DIR%\org.webjars.swagger-ui-5.17.14.jar;%APP_LIB_DIR%\dev.zio.zio-test_3-2.1.11.jar;%APP_LIB_DIR%\dev.zio.zio-test-sbt_3-2.1.11.jar;%APP_LIB_DIR%\dev.zio.zio-test-magnolia_3-2.1.11.jar;%APP_LIB_DIR%\dev.zio.zio-test-scalacheck_3-2.1.11.jar;%APP_LIB_DIR%\dev.zio.zio-mock_3-1.0.0-RC12.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-sttp-stub-server_3-1.11.7.jar;%APP_LIB_DIR%\io.circe.circe-testing_3-0.14.10.jar;%APP_LIB_DIR%\dev.zio.izumi-reflect-thirdparty-boopickle-shaded_3-2.3.9.jar;%APP_LIB_DIR%\org.typelevel.case-insensitive_3-1.4.0.jar;%APP_LIB_DIR%\org.typelevel.cats-parse_3-1.0.0.jar;%APP_LIB_DIR%\org.http4s.http4s-crypto_3-0.2.4.jar;%APP_LIB_DIR%\com.comcast.ip4s-core_3-3.6.0.jar;%APP_LIB_DIR%\org.typelevel.literally_3-1.1.0.jar;%APP_LIB_DIR%\org.scodec.scodec-bits_3-1.1.38.jar;%APP_LIB_DIR%\org.typelevel.vault_3-3.6.0.jar;%APP_LIB_DIR%\org.log4s.log4s_3-1.10.0.jar;%APP_LIB_DIR%\org.http4s.blaze-http_3-0.23.16.jar;%APP_LIB_DIR%\org.typelevel.jawn-fs2_3-2.4.0.jar;%APP_LIB_DIR%\org.typelevel.jawn-parser_3-1.6.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.tapir.tapir-cats-effect_3-1.11.7.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-model-1.3.1.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-config-1.3.1.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-tracer-initializer-1.3.1.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-shaded-protobuf-1.3.1.jar;%APP_LIB_DIR%\org.typelevel.cats-kernel_3-2.12.0.jar;%APP_LIB_DIR%\org.reactivestreams.reactive-streams-1.0.4.jar;%APP_LIB_DIR%\org.typelevel.cats-effect-kernel_3-3.5.4.jar;%APP_LIB_DIR%\org.typelevel.cats-effect_3-3.5.4.jar;%APP_LIB_DIR%\dev.zio.zio-parser_3-0.1.10.jar;%APP_LIB_DIR%\org.apache.commons.commons-text-1.10.0.jar;%APP_LIB_DIR%\com.github.stephenc.jcip.jcip-annotations-1.0-1.jar;%APP_LIB_DIR%\com.nimbusds.content-type-2.3.jar;%APP_LIB_DIR%\net.minidev.json-smart-2.5.1.jar;%APP_LIB_DIR%\com.nimbusds.lang-tag-1.7.jar;%APP_LIB_DIR%\com.google.guava.failureaccess-1.0.2.jar;%APP_LIB_DIR%\com.google.guava.listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;%APP_LIB_DIR%\org.typelevel.log4cats-core_3-2.7.0.jar;%APP_LIB_DIR%\com.twitter.hpack-1.0.2.jar;%APP_LIB_DIR%\io.netty.netty-common-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-resolver-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-buffer-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-unix-common-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-codec-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-classes-epoll-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-classes-kqueue-4.1.110.Final.jar;%APP_LIB_DIR%\com.github.jwt-scala.jwt-core_3-10.0.1.jar;%APP_LIB_DIR%\io.opentelemetry.opentelemetry-api-1.18.0.jar;%APP_LIB_DIR%\io.opentelemetry.opentelemetry-context-1.18.0.jar;%APP_LIB_DIR%\software.amazon.awssdk.sso-2.26.8.jar;%APP_LIB_DIR%\software.amazon.awssdk.ssooidc-2.26.8.jar;%APP_LIB_DIR%\org.gnieh.fs2-data-json_3-1.11.1.jar;%APP_LIB_DIR%\org.portable-scala.portable-scala-reflect_2.13-1.1.3.jar;%APP_LIB_DIR%\org.apache.httpcomponents.httpclient-4.5.14.jar;%APP_LIB_DIR%\io.github.classgraph.classgraph-4.8.177.jar;%APP_LIB_DIR%\com.linkedin.cytodynamics.cytodynamics-nucleus-0.2.0.jar;%APP_LIB_DIR%\org.apache.kafka.kafka_2.13-3.6.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-scala_3-2.14.3.jar;%APP_LIB_DIR%\org.gnieh.fs2-data-csv_3-1.11.1.jar;%APP_LIB_DIR%\org.gnieh.fs2-data-csv-generic_3-1.11.1.jar;%APP_LIB_DIR%\com.github.ghostdogpr.caliban-client_3-2.7.2.jar;%APP_LIB_DIR%\org.scalameta.scalafmt-interfaces-3.8.0.jar;%APP_LIB_DIR%\io.get-coursier.interface-1.0.19.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_tracer_common-0.16.0.jar;%APP_LIB_DIR%\com.squareup.retrofit2.retrofit-2.9.0.jar;%APP_LIB_DIR%\com.google.auto.value.auto-value-annotations-1.10.1.jar;%APP_LIB_DIR%\com.squareup.okio.okio-jvm-3.7.0.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-stdlib-1.9.23.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-stdlib-jdk8-1.9.10.jar;%APP_LIB_DIR%\org.testcontainers.testcontainers-1.20.2.jar;%APP_LIB_DIR%\com.github.luben.zstd-jni-1.5.5-1.jar;%APP_LIB_DIR%\org.lz4.lz4-java-1.8.0.jar;%APP_LIB_DIR%\org.xerial.snappy.snappy-java-1.1.10.4.jar;%APP_LIB_DIR%\software.amazon.awssdk.aws-query-protocol-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.profiles-2.28.21.jar;%APP_LIB_DIR%\com.azure.azure-core-1.53.0.jar;%APP_LIB_DIR%\com.azure.azure-core-http-netty-1.15.5.jar;%APP_LIB_DIR%\com.azure.azure-json-1.3.0.jar;%APP_LIB_DIR%\com.microsoft.azure.msal4j-1.17.2.jar;%APP_LIB_DIR%\com.microsoft.azure.msal4j-persistence-extension-1.3.0.jar;%APP_LIB_DIR%\net.java.dev.jna.jna-platform-5.13.0.jar;%APP_LIB_DIR%\org.jruby.joni.joni-2.1.27.jar;%APP_LIB_DIR%\org.graalvm.sdk.collections-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.sdk.nativeimage-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.polyglot.polyglot-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.sdk.word-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.truffle.truffle-enterprise-24.1.0.jar;%APP_LIB_DIR%\io.confluent.kafka-schema-serializer-7.7.1.jar;%APP_LIB_DIR%\io.confluent.logredactor-1.0.12.jar;%APP_LIB_DIR%\io.confluent.kafka-protobuf-provider-7.7.1.jar;%APP_LIB_DIR%\io.confluent.kafka-protobuf-types-7.7.1.jar;%APP_LIB_DIR%\io.confluent.kafka-json-schema-provider-7.7.1.jar;%APP_LIB_DIR%\io.confluent.kafka-json-serializer-7.7.1.jar;%APP_LIB_DIR%\com.amazonaws.aws-java-sdk-sts-1.12.660.jar;%APP_LIB_DIR%\software.amazon.glue.schema-registry-common-1.1.20-cdk2.jar;%APP_LIB_DIR%\software.amazon.awssdk.arns-2.22.12.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-reflect-1.9.22.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-scripting-compiler-impl-embeddable-1.9.10.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-scripting-compiler-embeddable-1.9.10.jar;%APP_LIB_DIR%\com.squareup.okio.okio-3.4.0.jar;%APP_LIB_DIR%\com.squareup.okio.okio-fakefilesystem-3.2.0.jar;%APP_LIB_DIR%\org.jetbrains.kotlinx.kotlinx-serialization-core-jvm-1.4.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-schema-4.3.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-compiler-4.3.0.jar;%APP_LIB_DIR%\com.google.api.grpc.proto-google-common-protos-2.22.1.jar;%APP_LIB_DIR%\com.google.jimfs.jimfs-1.1.jar;%APP_LIB_DIR%\org.apache.commons.commons-collections4-4.4.jar;%APP_LIB_DIR%\com.lihaoyi.sourcecode_3-0.4.0.jar;%APP_LIB_DIR%\com.lihaoyi.geny_3-1.1.0.jar;%APP_LIB_DIR%\commons-io.commons-io-2.15.1.jar;%APP_LIB_DIR%\org.testcontainers.database-commons-1.20.2.jar;%APP_LIB_DIR%\software.amazon.awssdk.third-party-jackson-core-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.checksums-spi-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.checksums-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.retries-2.28.21.jar;%APP_LIB_DIR%\software.amazon.awssdk.http-auth-aws-eventstream-2.28.21.jar;%APP_LIB_DIR%\software.amazon.eventstream.eventstream-1.0.1.jar;%APP_LIB_DIR%\org.apache.httpcomponents.httpcore-4.4.16.jar;%APP_LIB_DIR%\io.netty.netty-codec-http-4.1.112.Final.jar;%APP_LIB_DIR%\io.netty.netty-codec-http2-4.1.112.Final.jar;%APP_LIB_DIR%\commons-digester.commons-digester-2.1.jar;%APP_LIB_DIR%\commons-logging.commons-logging-1.3.0.jar;%APP_LIB_DIR%\commons-collections.commons-collections-3.2.2.jar;%APP_LIB_DIR%\joda-time.joda-time-2.10.14.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-storage-api-3.6.2.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-server-common-3.6.2.jar;%APP_LIB_DIR%\com.yammer.metrics.metrics-core-2.2.0.jar;%APP_LIB_DIR%\com.softwaremill.sttp.apispec.asyncapi-model_3-0.11.3.jar;%APP_LIB_DIR%\com.softwaremill.sttp.apispec.apispec-model_3-0.11.3.jar;%APP_LIB_DIR%\com.softwaremill.sttp.apispec.jsonschema-circe_3-0.11.3.jar;%APP_LIB_DIR%\org.scala-sbt.test-interface-1.0.jar;%APP_LIB_DIR%\org.scalacheck.scalacheck_3-1.18.0.jar;%APP_LIB_DIR%\io.circe.circe-numbers-testing_3-0.14.10.jar;%APP_LIB_DIR%\org.typelevel.cats-laws_3-2.12.0.jar;%APP_LIB_DIR%\org.typelevel.discipline-core_3-1.7.0.jar;%APP_LIB_DIR%\com.softwaremill.diffx.diffx-core_3-0.9.0.jar;%APP_LIB_DIR%\org.http4s.blaze-core_3-0.23.16.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-tracer-common-1.3.1.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-tracer-otel-1.3.1.jar;%APP_LIB_DIR%\io.prometheus.prometheus-metrics-tracer-otel-agent-1.3.1.jar;%APP_LIB_DIR%\net.minidev.accessors-smart-2.5.1.jar;%APP_LIB_DIR%\org.gnieh.fs2-data-text_3-1.11.1.jar;%APP_LIB_DIR%\org.gnieh.fs2-data-finite-state_3-1.11.1.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-group-coordinator-3.6.2.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-metadata-3.6.2.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-tools-api-3.6.2.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-raft-3.6.2.jar;%APP_LIB_DIR%\net.sourceforge.argparse4j.argparse4j-0.7.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.dataformat.jackson-dataformat-csv-2.16.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.datatype.jackson-datatype-jdk8-2.16.0.jar;%APP_LIB_DIR%\net.sf.jopt-simple.jopt-simple-5.0.4.jar;%APP_LIB_DIR%\org.bitbucket.b_c.jose4j-0.9.4.jar;%APP_LIB_DIR%\org.scala-lang.scala-reflect-2.13.14.jar;%APP_LIB_DIR%\com.typesafe.scala-logging.scala-logging_2.13-3.9.4.jar;%APP_LIB_DIR%\io.dropwizard.metrics.metrics-core-4.1.12.1.jar;%APP_LIB_DIR%\org.apache.zookeeper.zookeeper-3.8.4.jar;%APP_LIB_DIR%\commons-cli.commons-cli-1.4.jar;%APP_LIB_DIR%\com.thoughtworks.paranamer.paranamer-2.8.jar;%APP_LIB_DIR%\org.typelevel.shapeless3-deriving_3-3.4.1.jar;%APP_LIB_DIR%\com.softwaremill.sttp.client3.jsoniter_3-3.9.7.jar;%APP_LIB_DIR%\com.github.plokhotnyuk.jsoniter-scala.jsoniter-scala-core_3-2.30.1.jar;%APP_LIB_DIR%\org.jetbrains.annotations-17.0.0.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-stdlib-jdk7-1.9.10.jar;%APP_LIB_DIR%\junit.junit-4.13.2.jar;%APP_LIB_DIR%\org.rnorth.duct-tape.duct-tape-1.0.8.jar;%APP_LIB_DIR%\com.github.docker-java.docker-java-api-3.4.0.jar;%APP_LIB_DIR%\com.github.docker-java.docker-java-transport-zerodep-3.4.0.jar;%APP_LIB_DIR%\com.azure.azure-xml-1.1.0.jar;%APP_LIB_DIR%\io.projectreactor.reactor-core-3.4.38.jar;%APP_LIB_DIR%\io.netty.netty-handler-proxy-4.1.110.Final.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-boringssl-static-2.0.65.Final.jar;%APP_LIB_DIR%\io.projectreactor.netty.reactor-netty-http-1.0.45.jar;%APP_LIB_DIR%\net.java.dev.jna.jna-5.13.0.jar;%APP_LIB_DIR%\org.jruby.jcodings.jcodings-1.0.43.jar;%APP_LIB_DIR%\org.graalvm.js.js-language-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.truffle.truffle-runtime-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.truffle.truffle-compiler-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.sdk.jniutils-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.sdk.nativebridge-24.1.0.jar;%APP_LIB_DIR%\io.confluent.logredactor-metrics-1.0.12.jar;%APP_LIB_DIR%\com.eclipsesource.minimal-json.minimal-json-0.9.5.jar;%APP_LIB_DIR%\com.squareup.wire.wire-schema-jvm-4.9.7.jar;%APP_LIB_DIR%\com.squareup.wire.wire-runtime-jvm-4.9.7.jar;%APP_LIB_DIR%\com.github.erosb.json-sKema-0.15.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.datatype.jackson-datatype-guava-2.16.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.datatype.jackson-datatype-joda-2.16.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-parameter-names-2.16.0.jar;%APP_LIB_DIR%\com.kjetland.mbknor-jackson-jsonschema_2.13-1.0.39.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-scripting-jvm-1.9.10.jar;%APP_LIB_DIR%\io.confluent.common-config-7.7.1.jar;%APP_LIB_DIR%\com.amazonaws.aws-java-sdk-core-1.12.660.jar;%APP_LIB_DIR%\com.amazonaws.jmespath-java-1.12.660.jar;%APP_LIB_DIR%\software.amazon.glue.schema-registry-build-tools-1.1.20-cdk2.jar;%APP_LIB_DIR%\software.amazon.awssdk.url-connection-client-2.22.12.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-scripting-common-1.9.10.jar;%APP_LIB_DIR%\com.squareup.okio.okio-fakefilesystem-jvm-3.4.0.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-stdlib-common-1.9.10.jar;%APP_LIB_DIR%\com.squareup.wire.wire-runtime-4.3.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-kotlin-generator-4.3.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-java-generator-4.3.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-swift-generator-4.3.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-profiles-4.3.0.jar;%APP_LIB_DIR%\org.pcollections.pcollections-4.0.1.jar;%APP_LIB_DIR%\io.circe.circe-optics_3-0.15.0.jar;%APP_LIB_DIR%\eu.timepit.refined-scalacheck_3-0.11.2.jar;%APP_LIB_DIR%\org.testcontainers.nginx-1.20.2.jar;%APP_LIB_DIR%\org.typelevel.cats-kernel-laws_3-2.12.0.jar;%APP_LIB_DIR%\org.ow2.asm.asm-9.6.jar;%APP_LIB_DIR%\org.typelevel.cats-collections-core_3-0.9.8.jar;%APP_LIB_DIR%\commons-beanutils.commons-beanutils-1.9.4.jar;%APP_LIB_DIR%\org.apache.zookeeper.zookeeper-jute-3.8.4.jar;%APP_LIB_DIR%\org.apache.yetus.audience-annotations-0.12.0.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-epoll-4.1.110.Final.jar;%APP_LIB_DIR%\org.hamcrest.hamcrest-core-1.3.jar;%APP_LIB_DIR%\com.github.docker-java.docker-java-transport-3.4.0.jar;%APP_LIB_DIR%\io.netty.netty-codec-socks-4.1.110.Final.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-classes-2.0.65.Final.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-boringssl-static-2.0.65.Final-linux-x86_64.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-boringssl-static-2.0.65.Final-linux-aarch_64.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-boringssl-static-2.0.65.Final-osx-x86_64.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-boringssl-static-2.0.65.Final-osx-aarch_64.jar;%APP_LIB_DIR%\io.netty.netty-tcnative-boringssl-static-2.0.65.Final-windows-x86_64.jar;%APP_LIB_DIR%\io.netty.netty-resolver-dns-4.1.109.Final.jar;%APP_LIB_DIR%\io.netty.netty-resolver-dns-native-macos-4.1.109.Final-osx-x86_64.jar;%APP_LIB_DIR%\io.projectreactor.netty.reactor-netty-core-1.0.45.jar;%APP_LIB_DIR%\org.graalvm.regex.regex-24.1.0.jar;%APP_LIB_DIR%\org.graalvm.shadowed.icu4j-24.1.0.jar;%APP_LIB_DIR%\com.squareup.javapoet-1.13.0.jar;%APP_LIB_DIR%\com.squareup.kotlinpoet-jvm-1.16.0.jar;%APP_LIB_DIR%\javax.validation.validation-api-2.0.1.Final.jar;%APP_LIB_DIR%\org.jetbrains.kotlin.kotlin-script-runtime-1.9.10.jar;%APP_LIB_DIR%\com.fasterxml.jackson.dataformat.jackson-dataformat-cbor-2.12.6.jar;%APP_LIB_DIR%\org.jetbrains.kotlinx.kotlinx-datetime-jvm-0.4.0.jar;%APP_LIB_DIR%\com.squareup.kotlinpoet-1.10.2.jar;%APP_LIB_DIR%\com.squareup.wire.wire-grpc-client-jvm-4.3.0.jar;%APP_LIB_DIR%\com.squareup.wire.wire-grpc-server-generator-4.3.0.jar;%APP_LIB_DIR%\io.outfoxx.swiftpoet-1.3.1.jar;%APP_LIB_DIR%\org.typelevel.algebra_3-2.10.0.jar;%APP_LIB_DIR%\io.netty.netty-codec-dns-4.1.109.Final.jar;%APP_LIB_DIR%\io.netty.netty-resolver-dns-classes-macos-4.1.109.Final.jar;%APP_LIB_DIR%\org.jetbrains.kotlinx.kotlinx-coroutines-core-jvm-1.5.2.jar"
set "APP_MAIN_CLASS=io.conduktor.console.Server"
set "SCRIPT_CONF_FILE=%APP_HOME%\conf\application.ini"
set _JAVA_OPTS=-javaagent:%CONDUKTOR_CONSOLE_HOME%\jmx-prometheus-agent\jmx_prometheus_javaagent-1.0.1.jar=10095:jmx_exporter_conf.yaml %_JAVA_OPTS%

rem Bundled JRE has priority over standard environment variables
if defined BUNDLED_JVM (
  set "_JAVACMD=%BUNDLED_JVM%\bin\java.exe"
) else (
  if "%JAVACMD%" neq "" (
    set "_JAVACMD=%JAVACMD%"
  ) else (
    if "%JAVA_HOME%" neq "" (
      if exist "%JAVA_HOME%\bin\java.exe" set "_JAVACMD=%JAVA_HOME%\bin\java.exe"
    )
  )
)

if "%_JAVACMD%"=="" set _JAVACMD=java

rem if configuration files exist, prepend their contents to the script arguments so it can be processed by this runner
call :parse_config "%SCRIPT_CONF_FILE%" SCRIPT_CONF_ARGS

call :process_args %SCRIPT_CONF_ARGS% %%*

rem Detect if this java is ok to use.
for /F %%j in ('"%_JAVACMD%" -version  2^>^&1') do (
  if %%~j==java set JAVAINSTALLED=1
  if %%~j==openjdk set JAVAINSTALLED=1
)

rem BAT has no logical or, so we do it OLD SCHOOL! Oppan Redmond Style
set JAVAOK=true
if not defined JAVAINSTALLED set JAVAOK=false

if "%JAVAOK%"=="false" (
  echo.
  echo A Java JDK is not installed or can't be found.
  if not "%JAVA_HOME%"=="" (
    echo JAVA_HOME = "%JAVA_HOME%"
  )
  echo.
  echo Please go to
  echo   http://www.oracle.com/technetwork/java/javase/downloads/index.html
  echo and download a valid Java JDK and install before running conduktor-console.
  echo.
  echo If you think this message is in error, please check
  echo your environment variables to see if "java.exe" and "javac.exe" are
  echo available via JAVA_HOME or PATH.
  echo.
  if defined DOUBLECLICKED pause
  exit /B 1
)

set _JAVA_OPTS=!_JAVA_OPTS! !_JAVA_PARAMS!

if defined CUSTOM_MAIN_CLASS (
    set MAIN_CLASS=!CUSTOM_MAIN_CLASS!
) else (
    set MAIN_CLASS=!APP_MAIN_CLASS!
)

rem Call the application and pass all arguments unchanged.
"%_JAVACMD%" !_JAVA_OPTS! !CONDUKTOR_CONSOLE_OPTS! -cp "%APP_CLASSPATH%" %MAIN_CLASS% !_APP_ARGS!

@endlocal

exit /B %ERRORLEVEL%


rem Loads a configuration file full of default command line options for this script.
rem First argument is the path to the config file.
rem Second argument is the name of the environment variable to write to.
:parse_config
  set _PARSE_FILE=%~1
  set _PARSE_OUT=
  if exist "%_PARSE_FILE%" (
    FOR /F "tokens=* eol=# usebackq delims=" %%i IN ("%_PARSE_FILE%") DO (
      set _PARSE_OUT=!_PARSE_OUT! %%i
    )
  )
  set %2=!_PARSE_OUT!
exit /B 0


:add_java
  set _JAVA_PARAMS=!_JAVA_PARAMS! %*
exit /B 0


:add_app
  set _APP_ARGS=!_APP_ARGS! %*
exit /B 0


rem Processes incoming arguments and places them in appropriate global variables
:process_args
  :param_loop
  shift
  call set _PARAM1=%%0
  set "_TEST_PARAM=%~0"

  if ["!_PARAM1!"]==[""] goto param_afterloop

  if "!_TEST_PARAM!"=="-main" (
    call set CUSTOM_MAIN_CLASS=%%1
    shift
    goto param_loop
  )

  if "!_TEST_PARAM!"=="-java-home" (
    set "JAVA_HOME=%~1"
    set "_JAVACMD=%~1\bin\java.exe"
    shift
    goto param_loop
  )

  if "!_TEST_PARAM:~0,2!"=="-J" (
    rem strip -J prefix
    call set _TEST_PARAM=!_TEST_PARAM:~2!
    if not "!_TEST_PARAM:~0,5!" == "-XX:+" if not "!_TEST_PARAM:~0,5!" == "-XX:-" if "!_TEST_PARAM:~0,3!" == "-XX" (
      rem special handling for -J-XX since '=' gets parsed away
      for /F "delims== tokens=1,*" %%G in ("!_TEST_PARAM!") DO (
        call set _TEST_PARAM=!_TEST_PARAM!=%%1
        shift
      )
    )
    set _JAVA_PARAMS=!_JAVA_PARAMS! !_TEST_PARAM!
    goto param_loop
  )

  if "!_TEST_PARAM:~0,2!"=="-D" (
    rem test if this was double-quoted property "-Dprop=42"
    for /F "delims== tokens=1,*" %%G in ("!_TEST_PARAM!") DO (
      if not ["%%H"] == [""] (
        set _JAVA_PARAMS=!_JAVA_PARAMS! !_PARAM1!
      ) else if [%1] neq [] (
        rem it was a normal property: -Dprop=42 or -Drop="42"
        call set _PARAM1=%%0=%%1
        set _JAVA_PARAMS=!_JAVA_PARAMS! !_PARAM1!
        shift
      )
    )
    goto param_loop
  )

  set _APP_ARGS=!_APP_ARGS! !_PARAM1!

  goto param_loop
  :param_afterloop

exit /B 0
