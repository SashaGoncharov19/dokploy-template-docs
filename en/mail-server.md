# Mail Server Pre-Install Setup

To use this template, you need to perform some actions before installing it.

## The minimal DNS configuration

This example shows you a set of records for one domain. Each domain that is added needs at least this set of records to function correctly.

````md
# Name              Type       Value
mail                IN A       1.2.3.4
autodiscover        IN CNAME   mail.example.org. (your ${DMS_HOSTNAME})
autoconfig          IN CNAME   mail.example.org. (your ${DMS_HOSTNAME})
@                   IN MX 10   mail.example.org. (your ${DMS_HOSTNAME})
````

## SSL/TLS

Dokploy uses Traefik to generate certificates for your containers. There's a problem here, the domain must be configured on another service for Traefik to request it from Let's Encrypt (i.e. Traefik will not issue a certificate without a request from the service/router).

Therefore, you need to create a basic Compose project and add your domain to this project to issue a certificate. Here is an example of a Compose project: 

```yaml
services:
  whoami:
    image: docker.io/traefik/whoami:latest
    networks:
      - dokploy-network
```

Then go to the `Domains` tab, click `Add Domain`, select `whoami` in the `Service Name` field, enter `your domain (mail.example.com)` in the `Host` field and set the `Container Port` field to 80. In the HTTPS line below, enable this value and select `Letsencrypt (Default)`.


Then save it, and in the `General` tab, click `Deploy`
