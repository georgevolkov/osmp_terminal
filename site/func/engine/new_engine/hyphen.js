function Autohyphen() { this.Autohyphen() };

Autohyphen.prototype = {
	tshy:         "&shy;",
	shy:          null,
	x:            '[йьъ]',
	g:            '[аеёиоуыэюяaeiouy]',
	s:            '(?:sh|ch|qu|[бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxz])',
	l:            '[ьъйаеёиоуыэюябвгджзйклмнпрстфхцчшщъьaeiouybcdfghjklmnpqrstvwxz]',
	rules:        null,

	Autohyphen: function(){
		if (Autohyphen.prototype.shy == null) with (Autohyphen.prototype)
		{
			var node = document.createElement("span");
			node.innerHTML = tshy;
			shy = node.childNodes[0].nodeValue;
			rules = [
				[s+g, g+l],
				[g+s, s+g],
				[s+g, s+g],
				[g+s, s+s+g],
				[g+s+s, s+g],
				[g+s+s, s+s+g],
				[x, l+l],
				null
			];
		}
	},

	hyphenizeText: function(text){
		var text = text.split(' ');
		for(var j = 0, k = text.length; j < k; j++)
		{
			if(text[j].length > 10)
			{
				for(var i = this.rules.length - 1; i >= 0; i--)
				{
					var ru = this.rules[i]; 
					if (!ru) continue;
					var re = new RegExp('(' + ru[0] + ')(?=' + ru[1] + ')', 'gi');
					text[j] = text[j].replace(re, '$1' + this.shy);
				}
			}
		}
		return text.join(' ');
	},

	dehyphenizeText: function(text){
		re = new RegExp(this.shy, 'g');
		return text.replace(re, '');
	}
};
var autohyphen = new Autohyphen();

