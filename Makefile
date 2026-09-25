.PHONY: all check

all: check

check:
	node --check src/cart.js
