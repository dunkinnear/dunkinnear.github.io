---
title: "Masters Research"
date: 2018-03-12
tags:
  - python
  - masters
  - GIS
  - glaciology
  - computer vision
cover:
  image: /images/research/20130804.png
---

<b>Automated crevasse detection on a calving glacier</b>.

<p>
In 2015 I undertook some research for my Masters dissertation while studying GIS at the University of Edinburgh. I chose a project under the supervision of Nick Hulton, a glaciologist and Python expert. The research was closely linked to the <a href="https://crios.pl/project/" target="_blank">CRIOS</a> project (led by Prof. Doug Benn at the University Centre in Svalbard (UNIS) at the time), which was set up to investigate the use of time-lapse photography in understanding calving behaviour by deriving short-term glacier velocity fluctuations and calving rates - mainly through the use of computer vision algorithms using the <a href="https://opencv.org/" target="_blank">OpenCV</a> Python library, among others.
</p>

<figure>
  <img src="/images/research/ROI.png" alt="Region of interest" itemprop="image">
</figure>

My particular research used a similar approach, but using satellite images rather than high-resolution cameras. The imagery was provided by Adrian Luckman at Swansea University, also involved with the CRIOS project, and consisted of a series of pre-processed <a href="https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/missions/TerraSar-X" target="_blank">TerraSAR-X</a> Radar images taken between 2013 and 2014 with an 11-day repeat cycle. These images have the advantage of near-global coverage at a relatively high resolution, and are not affected by cloud cover/inclement weather, providing an incredibly useful resource to monitor earth surface processes, including glaciers. Having that consistent repeat cycle was important for the approach we took to measure the movement of the glacier, using computer vision algorithms to track the movement of 'unique' pixel patterns on the glacier between image pairs, where a longer period of time may have lost many of the pixel patterns due to surface change.

<figure>
  <video autoplay loop muted playsinline style="width: 100%; border-radius: 4px;">
    <source src="/images/research/tunabreen_h264.mp4" type="video/mp4">
  </video>
  <figcaption>Time-lapse of Tunabreen glacier</figcaption>
</figure>

---
The second major challenge was to delineate the major crevasses on the glacier, to allow measurement of the crevasse and inter-crevasse widths. The was done using a combination of image-processing techniques, including a Lee filter and contrast enhancement, before applying a Canny edge detector using OpenCV. We wanted to pick out the major crevasses but not minor cracks and undulations on the surface.

<figure>
  <img src="/images/research/filter.png" alt="Lee filter example" itemprop="image">
  <figcaption>Example of Lee filter applied to a TerraSAR-X image</figcaption>
</figure>

The main steps in the final workflow were as follows:
<ol>
  <li>Crop image to area of interest</li>
  <li>Apply Lee filter to remove speckle, and image enhacement to help delineate crevasse edges.</li>
  <li>Detect crevasse edges using a Canny edge detector.</li>
  <li>Create points along crevasse edges, and track movement of unique pixel patterns between image pairs</li>
  <li>Calculate strain rates based on this movement, and compare 'intra-crevasse' and 'inter-crevasse' movement to assess crevasse opening/closing.</li>
</ol>

<figure>
  <img src="/images/research/close.png" alt="Detected crevasse edges and extension vectors" itemprop="image">
  <figcaption>Detected crevasse edges and extension vectors</figcaption>
</figure>

<figure>
  <img src="/images/research/graphs_aug.png" alt="Output strain rate chart example" itemprop="image">
  <figcaption>Output strain rate chart example</figcaption>
</figure>

---
I had only started learning Python a few months earlier, but I soon found out how powerful it can be, and relatively easy to learn for someone without a background in computer science. Not only that, but the way that Python can link together so many varied pieces of software through libraries and bindings, into one easy-to-read script or program, makes it the go-to language for geoprocessing. I wanted to try and use open-source software exclusively for this project, and the main Python libraries and software I used were:

<ul>
  <li><a href="https://gdal.org/en/stable/GDAL/OGR" target="_blank">GDAL/OGR</a> for reading and writing of raster/vector data sets</li>
  <li><a href="https://grass.osgeo.org/" target="_blank">GRASS GIS</a> Python bindings for some vector tools to help build crevasse edges</li>
  <li><a href="https://pyradar-tools.readthedocs.io/en/latest/" target="_blank">PyRadar</a> to filter the images</li>
  <li><a href="https://opencv.org/" target="_blank">OpenCV</a> to apply image enhancement, edge detection and calculate movement between image pairs.</li>
  <li><a href="https://pandas.pydata.org/" target="_blank">Pandas</a> to process and store data, and Pandas/Matplotlib to visualise results</li>
</ul>


<div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin: 12px 0; background: rgba(255,255,255,0.7); padding: 12px 16px; border-radius: 8px;">
  <img src="/images/research/python.png" alt="Python" style="height: 40px;">
  <img src="/images/research/GDALLogoColor.png" alt="GDAL" style="height: 40px;">
  <img src="/images/research/opencv_logo_icon_170888.png" alt="OpenCV" style="height: 40px;">
  <img src="/images/research/pyradar.png" alt="PyRadar" style="height: 40px;">
  <img src="/images/research/grass-logo-green.png" alt="GRASS GIS" style="height: 40px;">
  <img src="/images/research/pandas.png" alt="Pandas" style="height: 40px;">
</div>


---
For an overview of the research and some further reading see the web showcase <a href="https://www.geos.ed.ac.uk/~mscgis/14-15/s1472101/" target="_blank">here.</a> The final research paper went on to win a UK-wide <a href="https://www.rgs.org/research/research-groups/research-group-awards-prizes-and-grants/geographical-information-science-research-group-giscrg-postgraduate-dissertation-award" target="_blank">award</a> from the Royal Geographical Society (with IBG). Feel free to get in touch for more information on the methods I used.

The research paper is available on <a href="https://www.researchgate.net/publication/333564770_Automated_detection_and_tracking_of_crevasses_on_a_calving_glacier_from_TerraSAR-X_imagery" target="_blank">ResearchGate</a>.
