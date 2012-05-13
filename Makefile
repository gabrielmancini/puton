
RELEASE = alpha

JS_TARGETS = \
	lib/pouchdb/pouch.alpha.js \
	lib/backbone/backbone-min.js \
  src/puton.js 

all :
	$(MAKE) -C  lib/pouchdb/
	(echo "(function() { "; cat $(JS_TARGETS); echo " })(this);") > puton.$(RELEASE).js
