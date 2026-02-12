java -jar /home/thomas/sparna/00-Clients/SAPA/sparql-anything-v1.0.0.jar \
-q construct-campagnes.rq \
--format TTL \
> campagnes.ttl

java -jar /home/thomas/sparna/00-Clients/SAPA/sparql-anything-v1.0.0.jar \
-q construct-cote-lot.rq \
--load campagnes.ttl \
--format TTL \
> cote-lot.ttl

update --update=clean-campagnes.ru --data=campagnes.ttl --dump > campagnes-clean.ttl