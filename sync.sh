#!/bin/bash
aws s3 sync --size-only --acl public-read --delete --exclude '.*' /projects/b2bcbd/b2bcbd.us 's3://b2bcbd.us/'
aws cloudfront create-invalidation --distribution-id E25I7ANYGTLI54 --paths /

