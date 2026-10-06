.PHONY: all check env-check slow

all: check

check:
	node --input-type=module --check < src/cart.js

env-check:
	sh scripts/env-check.sh

slow:
	sleep 180
	@echo "slow target finished"
