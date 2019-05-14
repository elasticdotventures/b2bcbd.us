#!/bin/bash
aws s3 sync --size-only --acl public-read --delete --exclude '.*' /projects/b2bcbd/b2bcbd.old/dist 's3://b2bcbd.us/'
