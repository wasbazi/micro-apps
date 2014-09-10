PORT?=8000

server:
	@python -m SimpleHTTPServer $(PORT)

.PHONY: server
