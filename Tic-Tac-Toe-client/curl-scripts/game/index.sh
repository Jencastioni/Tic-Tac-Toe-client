curl "https://tic-tac-toe-api-development.herokuapp.com/games/" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
echo

# curl 'https://tic-tac-toe-api-production.herokuapp.com/game' \
#   --include \
#   --request GET \
#   --header "Content-Type: application/json" \
#   --data '{
#     "games":[
#     {
#       "cells": "'"${ARRAY}"'",
#       "over": "'"${BOOLEAN}"'",
#       "_id": "'"${ID}"'",
#       "owner": "'"${USERID}"'",
#       "createdAt": "'"${CREATEDAT}"'",
#       "updatedAt": "'"${UPDATEDAT}"'",
#       "_V": "'"${VERSION}"'"
#     }
#     ]
#   }'