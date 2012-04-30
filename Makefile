
RELEASE = alpha

JS_TARGETS = \
	lib/pouchdb/pouch.alpha.js \
    src/puton.js 

all :
	$(MAKE) -C  lib/pouchdb/
	(echo "(function() { "; cat $(JS_TARGETS); echo " })(this);") > puton.$(RELEASE).js
