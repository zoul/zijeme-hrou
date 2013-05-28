upload:
	rsync -pvtrlL --exclude Makefile --cvs-exclude --delete _site/ cirdan:websites/zijemehrou.cz

clean:
	rm -rf _site
