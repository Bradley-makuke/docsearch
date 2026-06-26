FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and restore
COPY backend/DocSearch.sln ./
COPY backend/src/ ./src/
COPY backend/tests/ ./tests/

RUN dotnet restore DocSearch.sln

# Build and publish only the API project
RUN dotnet publish src/DocSearch.Api/DocSearch.Api.csproj \
    -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "DocSearch.Api.dll"]