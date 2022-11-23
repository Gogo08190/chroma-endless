#!/bin/sh
# Chroma Endless Server Startup Script

# Edit the below values to change JVM Arguments or Allocated RAM for the server.
ALLOCATED_RAM="7G"
JVM_ARGUMENTS="-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch"

# Make sure this matches the Forge version of the server if you update.
FORGE_VERSION="forge-1.16.5-36.2.39"

# Install Minecraft Forge if it isn't already installed.
FILE=./${FORGE_VERSION}.jar
if [ ! -f "${FILE}" ]; then
	echo "Installing Minecraft Forge Server."
    java -jar ./${FORGE_VERSION}-installer.jar --installServer
fi

echo "Starting Endless Server."
java -jar -Xms${ALLOCATED_RAM} -Xmx${ALLOCATED_RAM} ${JVM_ARGUMENTS} ${FILE} nogui

read -p "Press enter to continue."
