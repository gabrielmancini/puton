
RELEASE = alpha

JS_TARGETS = \
    src/puton.js 

all :
	(echo "(function() { "; cat $(JS_TARGETS); echo " })(this);") > puton.$(RELEASE).js
