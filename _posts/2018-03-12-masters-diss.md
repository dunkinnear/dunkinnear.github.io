---
title: "Masters Research"
excerpt_separator: "<!--more-->"
header:
  image: /assets/images/research/20130804.png
categories:
  - Post Formats
tags:
  - python
  - masters
  - GIS
  - glaciology
  - computer vision
---



<b>Automated crevasse detection on a calving glacier</b>.

<!--more-->

<p>
In 2015 I undertook some research for my Masters dissertation while studying GIS at the University of Edinburgh. I chose a project under the supervision of Nick Hulton, a glaciologist and Python expert. The research was closely linked to the <a href="https://www.geos.ed.ac.uk/glaciology/svalbard_calving" target="_blank">CRIOS</a> project led by Prof. Doug Benn at the University Centre in Svalbard (UNIS), which was set up to investigate the use of time-lapse photography in understanding calving behaviour by deriving short-term glacier velocity fluctuations and calving rates - mainly through the use of computer vision algorithms using the <a href="https://opencv.org/" target="_blank">OpenCV</a> Python library, among others.
</p>

<img src="/assets/images/research/ROI.png" alt="{{ author.name }}" itemprop="image">

My particular research used a similar approach, but using satellite images rather than high-resolution cameras. The imagery was provided by Adrian Luckman at Swane University, also involved with the CRIOS project, and consisted of a series of pre-processed <a href="https://www.dlr.de/dlr/en/desktopdefault.aspx/tabid-10377/565_read-436/#/gallery/350" target="_blank">TerraSAR-X</a> Radar images taken between 2013 and 2014 with an 11-day repeat cycle. These images have the advantage of near-global coverage at a relatively high resolution, and are not affected by cloud cover/inclement weather, providing an incredibly useful resource to monitor earth surface processes, including glaciers. Having that consistent repeat cycle was important for the approach we took to measure the movement of the glacier, using computer vision algorithms to track the movement of 'unique' pixel patterns on the glacier between image pairs, where a longer period of time may have lost many of the pixel patterns due to surface change.

The second major challenge was to delineate the major crevasses on the glacier, to allow measurement of the crevasse and inter-crevasse widths. The was done using a combination of image-processing techniques, including a Lee filter and contrast enhancement, before applying a Canny edge detector, again using OpenCV. We wanted to pick out the major crevasses but not minor cracks and undulations on the surface. 

The main steps in the final workflow were as follows:
<ol>
  <li>Crop image to area of interest</li>
  <li>Apply Lee filter to remove speckle, and image enhacement to help delineate crevasse edges.</li>
  <li>Detect crevasse edge susing a Canny edge detector.</li>
  <li>Create points along crevasse edges, and track movement of unique pixel patterns between image pairs</li>
  <li>Calculate strain rates based on this movement, and compare 'intra-crevasse' and 'inter-crevasse' movement to assess crevasse opening/closing.</li>
</ol>

I had only started learning Python a few months earlier, but I soon found out how powerful a language it is, and relatively easy to learn for someone without a background in computer science. Not only that, but the way that Python can link together so many varied pieces of software through libraries and bindings, into one easy-to-read script or program, makes it the go-to language for geoprocessing. I wanted to try and use open-source software exclusively for this project, and the main Python libraries and software I used were:
<ul>
  <li>GDAL/OGR for reading and writing of raster/vector data sets</li>
  <li><a href="https://grass.osgeo.org/" target="_blank">GRASS GIS</a> Python bindings for some vector tools to help build crevasse edges</li>
  <li><a href="https://pyradar-tools.readthedocs.io/en/latest/" target="_blank">PyRadar</a> to filter the images</li>
  <li><a href="https://opencv.org/" target="_blank">OpenCV</a> to apply image enhancement, edge detection and calculate movement between image pairs.</li>
  <li><a href="https://pandas.pydata.org/" target="_blank">Pandas</a> to process and store data, and Pandas/Matplotlib to visualise results</li>
</ul>

For an overview of the research and some further reading see the web showcase <a href="https://www.geos.ed.ac.uk/~mscgis/14-15/s1472101/" target="_blank">here.</a> The final research paper went on to win a UK-wide <a href="https://quantile.info/giscrg-dissertation-prize-winners/" target="_blank">award</a> from the Royal Geographical Society, and is still in the process of being developed into a published paper. Feel free to get in touch for more information on the methods I used.
