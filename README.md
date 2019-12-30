# Webhook Action

Triggers a webhook from a GitHub action

## Required arguments

| Argument  | Description                                                                       |
|-----------|-----------------------------------------------------------------------------------|
| `url`     | The URL of your webhook                                                           |
| `method`  | The method type your webhook requires. Ex: `POST`, `DELETE`. `GET` is the default  |
| `headers` | The headers to send to your webhook                                               |
| `data`    | The data to send to your webhook                                                  |

## Example usage

```yml
name: Create Sandbox

on: pull_request

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v1

      - name: Webhook
        uses: trendyminds/github-actions-webhook@master
        env:
          url: https://my.webhook.url/path/to/my/action
          method: POST
          headers: '{"Content-Type":"application/json"}'
          data: '{"favorite_color":"blue","message":"Hello!"}'
```
