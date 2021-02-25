#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN apt-get update
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash
RUN apt-get -y install nodejs

FROM node:10-alpine as build-node
WORKDIR /ClientApp
COPY /ClientApp/package.json .
COPY /ClientApp/package-lock.json .
RUN npm install
COPY /ClientApp/ . 
RUN npm run build

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
ENV BuildingDocker true
WORKDIR /src
COPY ["FeedMe.csproj", ""]
RUN dotnet restore "./FeedMe.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "FeedMe.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FeedMe.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=build-node /ClientApp/build ./ClientApp/build
ENTRYPOINT ["dotnet", "FeedMe.dll"]