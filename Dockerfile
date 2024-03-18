#https://www.ryanmr.com/posts/next-standalone-mode
FROM node:20-alpine 
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY ./public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY ./.next/standalone ./
COPY ./.next/static ./.next/static

# Remove all folders except 'mili' from 'public/themes'
#RUN find ./public/themes -mindepth 1 -maxdepth 1 ! -name '$theme' -exec rm -rf {} \;
ENV NEXT_PUBLIC_THEME=$theme

#USER nextjs
EXPOSE 3000
ENV PORT 3000
EXPOSE 3000
CMD [ "node", "./server.js" ]
 
# Add labels
LABEL maintainer="Ritchie"
LABEL version="1.0"