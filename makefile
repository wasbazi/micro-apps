PORT?=8000

build:
	@echo "no build step currently"

angular:
	@python -m SimpleHTTPServer $(PORT)

.PHONY: server
