@echo off
rem Chroma Endless Server Startup Script

rem Edit the below values to change JVM Arguments or Allocated RAM for the server.
set ALLOCATED_RAM=7G
set JVM_ARGUMENTS=-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch

rem Make sure this matches the Forge version of the server if you update.
set FORGE_VERSION=forge-1.16.5-36.2.39

rem Install Minecraft Forge if it isn't already installed:
if not exist .\%FORGE_VERSION%.jar (
    echo Installing Minecraft Forge Server
    java -jar %FORGE_VERSION%-installer.jar --installServer
)

echo Starting Endless Server
java -jar -Xms%ALLOCATED_RAM% -Xmx%ALLOCATED_RAM% %JVM_ARGUMENTS% %FORGE_VERSION%.jar nogui

pause
