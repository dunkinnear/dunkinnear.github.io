---
title: "Masters Research"
excerpt_separator: "<!--more-->"
header:
  image: /assets/images/research/20130804.png
categories:
  - Post Formats
tags:
  - Post Formats
  - readability
  - standard
---



An overview of the research I undertook on Tunabreen glacier in Svalbard, as part of my Masters in GIS.

<!--more-->


<html>

<head>
    <title>Automated Crevasse Detection</title>
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
        
    <div class='header'>
        <a href="http://www.ed.ac.uk/schools-departments/geosciences/" target="_blank">
            <img class='header' src="index_files/image001.png">
        </a>
        <a href="http://www.geo-airbusds.com/terrasar-x/" target="_blank">
            <img class='png' src='index_files/terrasarx.png' height=100px>
        </a>
        <h1>Automated detection and tracking of crevasses on a calving glacier from TerraSAR-X imagery</h1>
        <h3 style='text-align: center'>Duncan A. Kinnear</h3>
        <h3 style='text-align: center'>MSc Dissertation</h3>
        <hr>
    </div>

    <div class='container'>
        <h2>Introduction</h2>
        <a href="index_files/Loc_map.png" target="_blank">
            <img class='inline' src='index_files/Loc_map.png' width=600px>
        </a>
                <p class='caption' style='width:600px;'><b>Figure 1: Location of the area of the Tunabreen and Von Postbreen glaciers covered by the TerraSAR-X imagery (C), on the island of Spitsbergen (B), part of the Svalbard archipelago (A).</b>
                </p>
            <video class="" style="" controls='controls' loop='loop' width=600px>
                <source src="index_files/tunabreen.ogv" class="">
                <source src="index_files/tunabreen.mov" class="">
                <source src="index_files/tunabreen.mp4" class="">
              
              Your browser does not support the video tag.
            </video>
                <p class='caption' style='width:600px;'><b>Figure 2: Timelapse showing the movement and retreat/advance of the glacier terminus during the image series used in this study, covering ~18 months over 2013 and 2014.</b>
                </p>
        <p>
        The relationship between calving and glacier dynamics has been the subject of recent debate as a result of thinning and rapid retreat of glaciers around the world. As a major control on the orientation of calving bays and the frequency of calving events, the importance of understanding crevasse formation and development on calving glaciers is paramount.</p>
            <p>
The TerraSAR-X satellite, launched in June 2007, is a German earth observation satellite that acquires X-band synthetic aperure radar (SAR) data at resolutions of 1 - 16m with an exact 11-day repeat-cycle. This high spatial and temporal resolution sets it apart from other civil SAR sensors and provides an opportunity to take accurate velocity measurements in high-flow outlet glaciers. Additionally, it opens up the possibility of delineating and measuring the relative movement of individual crevasse edges, to quantify the relative strain taken by the opening/closing of the crevasse, as opposed to dynamic thinning of the 'inter-crevasse' ice.
            </p>
        <p>The main aim of this study was to develop functionality to automatically detect crevasses from satellite images taken by the TerraSAR-X satellite between February 2013 and July 2014, and is summarized by 3 key research questions:</p>
                <ol type='I'>
                <li>
                Can crevasses be automatically identified and delineated from high-resolution Radar imagery?     </li>
                    <br>
                <li>
                Can the relative movement of either side of these crevasses be tracked between image pairs?
                </li>
                    <br>
                <li>
                To what extent is it feasible to derive 'intra-crevasse' and 'inter-crevasse' longitudinal surface strain rates from these relative movements?
                </li>
                </ol>
        <br> <p>The study area is Tunabreen, a calving tidewater glacier located on the island of Spitsbergen, in the high-Arctic archipelago of Svalbard (Figure 1). 
            </p>  
        <hr>
    </div>

    <div class='container'>
        <a href="https://www.python.org" target="_blank">
            <img class='png' src='index_files/python.png' height=50px>
        </a>
        <a href="http://opencv.org" target="_blank">
            <img class='png' src='index_files/opencv.png' height=50px>
        </a>   
        <a href="http://www.gdal.org" target="_blank">
            <img class='png' src='index_files/gdal.png' height=50px>
        </a>   
        <a href="http://pyradar-tools.readthedocs.org/en/latest/" target="_blank">    
            <img class='png' src='index_files/pyradar.png' height=50px>
        </a>   
        <a href="http://grass.osgeo.org" target="_blank">    
            <img class='png' src='index_files/grass.png' height=50px>
        </a>
        <h2>Methods</h2>
        
        <a href="index_files/ROI.png" target="_blank">
            <img class='inline' src='index_files/ROI.png' width=600px>
        </a>
            <p class='caption' style='width:600px;'><b>Figure 3: Example of SAR image of study area, with surface velocities calculated from feature-tracking a pair of images in February 2013. Red box shows the region of interest (ROI) covering the heavily crevassed terminus of Tunabreen, and strain 'zones' are also shown, as are control zones, used to assess zero-displacement errors in feature tracking. Units are in metres, projected to UTM Zone 33N.</b>
            </p>
        <a href="index_files/close.png" target="_blank">
            <img class='inline' src='index_files/close.png' width=600px>
        </a>
            <p class='caption' style='width:600px;'><b>Figure 4: Illustration of detected edges and strain calculations; 'right' edges are solid green lines, 'left' edges are dashed orange. Points seeded along 'right' edges are shown as black circles, and paired with corresponding points on both sides (shown by connecting yellow and red lines). Offsets are shown as yellow arrows, and calculated strain rates by green arrows (all strain rates in this image are extensional).</b>
            </p>
        
            <p>All functionality developed for this study was implemented using free and open-source software, and written using the Python programming language. Several Python libraries were utilised, including OpenCV (computer vision), GDAL/OGR (for handling raster and vector data sets), GRASS GIS (raster and vector GIS operations), and PyRadar (for filtering SAR images).</p>
        <p>Prior to crevasse detection, images were pre-processed to enhance contrast and smoothness in order to facilitate edge detection. This included cropping the images to a region of interest (ROI), applying a Lee filter to remove 'speckle' inherent to SAR images, automatically extracting the calving margin, and using adaptive equalisation to enhance the contrast of crevasse boundaries.</p>
        <p>To delineate crevasses, the Canny edge detector was used to identify strong boundaries in the image expected to represent crevasse edges. These edges were converted to vector polylines and sorted to remove spurious edges and seperate edges into 'right' and 'left' crevasse segments based on the pixel intensities either side of the edge. </p>
        <p>Points were 'seeded' along these crevasse edges and the offset of each point was calculated between image pairs by feature tracking coherent speckle and crevassing patterns on the glacier surface. This feature tracking is based on cross-correlation of patches surrounding each tracked point. Points with weak correlation values or non-sensical offsets were removed. Strain rates were then calculated by pairing points lying on 'right' and 'left' crevasses edges and comparing their offset to retrieve 'intra-crevasse' strain to represent crevasse opening/closing, and 'inter-crevasse' strain to account for dynamic thinning/thickening of the ice between crevasses (Figure 4).</p>
        <p>The location of each strain calculation was saved to a point shape file, to allow visual display of strain rates using GIS software, but also to CSV file, to allow graphical analysis and display of velocities and strain rates with distance from the terminus. Furthermore, the glacier was split in to 5 strain 'zones', based on differences in velocity and crevasse width across the glacier front, in order to assess to some degree the relative strain rates in different areas of the terminal region. This process was repeated for each image pair in the series, to allow any seasonal trends in the data to be analysed.</p>
        <hr>
    </div>
    
    <div class='container'>
        <h2>Results</h2>
        <a href="index_files/graphs_aug.png" target="_blank">
         <img class='inline' src='index_files/graphs_aug.png' width=700px>
        </a>
         
            <p class='caption' style='width:700px;'><b>Figure 5: Graphical output from an image pair in August 2013. (A) shows surface velocity with distance from the terminus for each of the 5 strain zones, binned into 50m intervals. (B), (C) and (D) use the same bins and zones to display total, inter-crevasse, and intra-crevasse longitudinal strain rates, respectively. There is a clear velocity gradient towards the terminus, which strain rates generally follow before levelling out and in some cases dropping off.</b>
            </p>
        <a href="index_files/Strain_map_Aug.png" target="_blank">
            <img class='inline' src='index_files/Strain_map_Aug.png' width=1300px>
        </a>
        <p class='caption' style='width:1300px;'><b>Figure 6: Interpolation surfaces showing the relative contributions of intra-crevasse and inter-crevasse strain cross the glacier. Small areas of compression probably represent compounded feature tracking errors. The large area of compression in the western region of the terminus may represent a submarine landform the ice is being pushed up against.</b>
            </p>
            <p>Crevasse detection was found to be fairly robust, but variable surface conditions and the effect of snow bridges or drifts obscured sections of smaller crevasses (less than ~10 metres wide) during the winter months. Calculated velocities showed a clear and steady increase towards the terminus, a result of increased basal sliding due to diminishing effective pressure as the glacier approaches flotation. Strain rates follow a similar trend, although the data is much more spread (Figure 5), in part due to the compounded errors attached with these strain rate calculations.
                </p>
            <p>Strain rates do level off around ~300m from the terminus, and in some cases drop off after this, especially in zones 1 and 2. This may be a result of the glacier decoupling from its bed due to continued surface ablation and thinning, causing complete flotation. Compressional strain is unexpected however, and localised values probably represent feature tracking errors, but the large area of compression (Figure 6), which causes a sharp drop-off in strain rates in Zones 1 and 2 (Figure 5) may represent the ice being pushed up against a submarine landform, although this is unknown.</p>
<!--        <p>Seasonal trends show that surface velocities, and both intra-crevasse and inter-crevasse strain rates show a slight increase in values over the winter months (Figure 7).</p>-->
        <hr>
    </div>

    <div class='container'>
        <h2>Conclusions</h2>
            <p>The accuracy of the crevasse detection used in this study is limited by the spatial resolution of the images, and calculated strain rates are limited by compounded feature tracking errors. However, crevasses have been detected fairly successfully using robust edge detection techniques, and despite the large error margins, clear and consistent underlying trends in derived strain rates have been observed. Detection is more successful over the summer months when surface melt increases the contrast and detail of crevasse edges. Separating 'right' and 'left' crevasse edges has been accomplished with good accuracy, but some duplicate crevasse edges and 'internal' edges remain that may not represent the true crevasse surface edge.</p>
        <p>
Correlation between tracked features is high in the terminal region of the glacier due to the distinct crevassing pattern, but tracking of smaller crevasses further back from the terminus often fails due to low coherence between images or indistinct features and small offsets.
        </p>
        <p>
Both 'intra-crevasse' and 'inter-crevasse' strain rates have been calculated over image pairs by pairing points for tracking on neighbouring 'right' and 'left' crevasse edges. Intra- and inter-crevasse longitudinal strain rates are seen to increase towards the terminus, before levelling out and in some cases dropping off within ~300m of the margin.
        </p>
        <p>
It is hoped that the findings of this study may have further use in crevasse identification for polar travel hazard mitigation; the wide coverage and high spatial and temporal resolution of TerraSAR-X imagery makes this a feasible option for regularly updated crevasse hazard maps. Ground truthing some of the identified crevasses will reveal detail on the absolute accuracy of the method. Furthermore, the method may have use in glaciological research; the observed strain rates have revealed some interesting characteristics of Tunabreen's flow regime that may provide further insight into the dynamics of a tidewater glacier leading up to a calving event, and which accurate field measurements will also help to ground-truth. 
</p>
        <hr>
    </div>
    <div class='container'>
        <h2>Key References</h2>
        <ol>
        <li>
           BENN, D. I., WARREN, C. R. & MOTTRAM, R. H., 2007. Calving processes and the dynamics of calving glaciers. <i>Earth Science Reviews</i>, 82, 143-179. 
            </li>
        <br>
        <li>
            CANNY, J. F., 1986. A computational approach to edge detection. <i>IEEE Transactions on Pattern Analysis and Machine Intelligence</i>, 6, 679-698.
            </li>
            <br>
        <li>
            MANSELL, D., LUCKMAN, A., & MURRAY, T., 2012. Dynamics of tidewater surge-type glaciers in northwest Svalbard. <i>Journal of Glaciology</i>, 58, 110-118.
            </li>
            <br>
        <li>
            SCHUBERT, A., FAES, A., KAAB, A. & MEIER, E., 2013. Glacier surface velocity estimation using repeat TerraSAR-X images: wavelet vs. correlation-based image matching. <i>ISPRS Journal of Photogrammetry and Remote Sensing</i>, 82, 49-62.
            </li>
            <br>
        <li>
            VAN DER VEEN, C. J., 2002. Calving glaciers. <i>Progress in Physical Geography</i>, 26, 96-122.
            </li>
            <br>
        <li>
            VENTERIS, E. R., WHILLANS, I. M., & VAN DER VEEN, C. J., 1997. Effect of extension rate on terminus position, Columbia Glacier, Alaska, USA. <i>Annals of Glaciology</i>, 24, 49-53.
            </li>
            <br>
        <li>
            VIELI, A., FUNK, M., & BLATTER, H., 2000. Tidewater glaciers: frontal flow acceleration and basal sliding. <i>Annals of Glaciology</i>, 31, 217-221.
            </li>
            <br>
        <li>
            WHILLANS, I. M. & TSENG, Y. H., 1995. Automatic tracking of crevasses on satellite images. <i>Cold Regions Science and Technology</i>, 23, 201-214.
            </li></ol>
    </div>
    <div class='footer'>
        <p>Developed by Duncan Kinnear   |   <a href="mailto:d.a.kinnear@gmail.com" target="_top">d.a.kinnear@gmail.com</a>
        <br>
        University of Edinburgh
        <br>
        School of GeoSciences 2015</p>
        
    </div>
    
    <p style='color: black'><i>Image courtesy of ravas51 (<a href="https://www.flickr.com/photos/38007185@N00/8452748436/in/album-72157632704466079/" target="_blank">www.flickr.com</a>)</i></p>

</body>

</html>
