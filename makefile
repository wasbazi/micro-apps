PORT?=8000

build:
	@echo "no build step currently"

angular:
	@(cd angular-require && python -m SimpleHTTPServer $(PORT))

.PHONY: server
