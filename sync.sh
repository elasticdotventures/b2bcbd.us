#!/bin/bash
aws s3 sync --size-only --acl public-read --delete --exclude '.*' /projects/b2bcbd.us/ 's3://b2bcbd.us/'
