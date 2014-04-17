Notes
You may enter 7-, 8-, 12- or 13-digit barcodes. All forms support automatically calculating the final (checksum) digit. To do this, use a question mark instead of an actual digit, for example:

12345612345?
7681224?
The default mode, "UPC / EAN", attempts to DWIM ("do what I mean"): If you pass it 7 digits or 8 digits starting with the digit 0, then it will generate a UPC-E barcode. If you pass it 8 digits not starting with the digit 0, then it will generate an EAN-8 barcode. If you pass it 12 digits, then it will generate a UPC-A barcode. Finally, if you pass it 13 digits, then it will generate an EAN-13 barcode.

You can force 8 digits to be generated as EAN-8 by selecting the mode "EAN-8".

You can force generation of UPC-E by selecting the mode "UPC-E". In this mode, you may also pass 12 digits, instead of 7 or 8, which will get compressed into the UPC-E form if the form factor is correct. (See this description of UPC-E for more information.) For example, if you ask to encode "04432000008?", then the generated UPC-E will be for the number "04432841".

All UPC/EAN barcodes support a 2- or 5-digit supplemental code, which appears to the right of the main code. To produce such a barcode, place a comma and then the supplemental digits after the main number to encode, for example:

5553221?,76
9789862410035,90000
To change the banner over the barcode, place a colon and a new message after the barcode number, for example:

12349912:Hi Mom!
99994447327?:Yumminess
If you want to suppress the banner entirely, place a colon after the number but nothing else, as in:

6623919:
012345612345?:


<select name="mode" size="1">
         	  <option value="upcean" selected="">UPC / EAN</option>
            <option value="upcean-short">UPC / EAN, short height</option>
            <option value="text">Text Generator</option><option value="upce">UPC-E</option>
            <option value="upce-short">UPC-E, short height</option>
            <option value="ean8">EAN-8</option>
            <option value="ean8-short">EAN-8, short height</option>
            
          </select>