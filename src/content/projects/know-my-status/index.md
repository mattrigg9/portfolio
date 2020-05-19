---
type: project
featured: true
title: Know My Status
shortDescription: Everyone should know their status. Know My Status is an anonymous sexual health clinic discovery tool.
featuredImage: knowmystatus-screen.png
fullImage: knowmystatus-screen-full.png
website: https://knowmystat.us
---

After a very frustrating experience trying to find a health clinic while overseas, I began to wonder if our own US government offered any better solution for the discovering your nearest sexual health clinic.

As it turns out, the CDC clinic finder was even worse. I felt I had a responsibility to make access to this information easier.

I reverse engineered the CDC API and crawled through the publicly available clinic information across the United States. I then aggregated this data into a geospatial NoSQL database, indexed by a geohash prefix. I managed and vended the data by a building a distributed, serverless micro-architecture. The result? An extremely fast, user-centric application built on a robust and scalable platform.