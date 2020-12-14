---
title: Wave-based non-line-of-sight imaging using fast f&#8211;k migration
subtitle: SIGGRAPH 2019
brief: A robust, wave-based image formation model for the problem of non-line-of-sight (NLOS) imaging.
authors: <strong>David B. Lindell</strong>, Matthew O'Toole, Gordon Wetzstein
layout: pub 
date: 2019-07-15
img: siggraph2019lindell.png
thumbnail: siggraph2019lindell.png
permalink: publications/nlos-fk
alt: image-alt
pdf-link: https://drive.google.com/a/stanford.edu/file/d/1IizX1BXRICwBEJdGNu_bFaZ6oq4E92hQ/view?usp=sharing
supp-link: https://drive.google.com/a/stanford.edu/file/d/1d_aY09rBeZRpup9-XxPkILbND4QESO7l/view?usp=sharing
code-link: https://github.com/computational-imaging/nlos-fk
video-link: https://www.youtube.com/watch?v=BVYfzLXUi48
social: 
    - title: Stanford News  
      url: https://news.stanford.edu/2019/07/29/seeing-moving-objects-around-corners/ 
      img: stanford-news-service-logo.png  
    - title: Tech Briefs 
      url: https://www.techbriefs.com/component/content/article/tb/stories/blog/34990 
      img: tb-logo.png
    - title: Hackaday  
      url: https://hackaday.com/2019/08/22/looking-around-corners-with-f-k-migration/ 
      img: hackaday-logo.png
    - title: UPI
      url: https://www.upi.com/Science_News/2019/07/30/New-camera-can-film-moving-object-from-around-a-corner/5161564503864/ 
      img: upi-logo.png

---

**We introduce a wave-based image formation model for the problem of non-line-of-sight (NLOS) imaging. Inspired by inverse methods used in seismology, we adapt a frequency-domain method, f-k migration, for solving the inverse NLOS problem.**
{: style="text-align: left;" }

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-repsonsive-item" src="" src="https://www.youtube.com/embed/BVYfzLXUi48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

### Abstract
- - -
Imaging objects outside a camera’s direct line of sight has important applications in robotic vision, remote sensing, and many other domains. Time-of-flight-based non-line-of-sight (NLOS) imaging systems have recently demonstrated impressive results, but several challenges remain. Image formation and inversion models have been slow or limited by the types of hidden surfaces that can be imaged. Moreover, non-planar sampling surfaces and non-confocal scanning methods have not been supported by efficient NLOS algorithms. With this work, we introduce a wave-based image formation model for the problem of NLOS imaging.
{: style="text-align: left;" }

Inspired by inverse methods used in seismology, we adapt a frequency-domain method, f−k migration, for solving the inverse NLOS problem. Unlike existing NLOS algorithms, f−k migration is both fast and memory efficient, it is robust to specular and other complex reflectance properties, and we show how it can be used with non-confocally scanned measurements as well as for non-planar sampling surfaces. f−k migration is more robust to measurement noise than alternative methods, generally produces better quality reconstructions, and is easy to implement. We experimentally validate our algorithms with a new NLOS imaging system that records room-sized scenes outdoors under indirect sunlight, and scans persons wearing retroreflective clothing at interactive rates.
{: style="text-align: left;" }

### Slides 
- - -
<iframe src="" src="//www.slideshare.net/slideshow/embed_code/key/BZlW4Y804NNvbr" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>  

<br>
### Reconstructing Hidden Objects
- - -
<div class="row">
<div class="mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/illustration.png" style="height: 300; padding: 10px;" class="img-fluid" alt="">
</div>
</div>

**Experimental Setup:** The imaging system records the time it takes for laser light to scatter off the wall, reflect off the hidden bunny, and return to the wall. By acquiring these timing measurements for different laser positions on the wall, the 3D geometry of the hidden object can be reconstructed.
{: style="text-align: left;" }

### Reconstructing Hidden Objects
- - -
<div class="container">
<div class="row">
<div class="col-xs-4 col-md-4">
<img src="" src="/assets/img/publication/siggraph2019lindell/teaser_1.png" class="img-fluid" alt="">
</div>
<div class="col-xs-4 col-md-4">
<img src="" src="/assets/img/publication/siggraph2019lindell/meas_slice.gif" class="img-fluid" alt="">
</div>
<div class="col-xs-4 col-md-4">
<img src="" src="/assets/img/publication/siggraph2019lindell/teaser_stolt.gif" class="img-fluid" alt="">
</div>
</div>
</div>
<br>
**Room-sized Reconstruction:** We capture measurements of this hidden room-sized scene and accurately reconstruct the geometry
{: style="text-align: left;" }

### Interactive Capture 
- - -
<div class="row">
<div class="col-md-8 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" src="/assets/img/publication/siggraph2019lindell/interactive.webm" type="video/webm">
</video>
</div>
</div>
<br>
**Interactive Capture:** By rapidly scanning the wall, we can capture the movement of a person in a retroreflective suit at interactive rates of 4 fps. The reconstruction clearly shows the pose of the actor, imaged from around the corner.
{: style="text-align: left;" }

### Outdoor Results 
- - -
<div class="row">
<div class="col-md-8 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" src="/assets/img/publication/siggraph2019lindell/outdoor.webm" type="video/webm">
</video>
</div>
</div>

**Outdoor Result:** We can reconstruct a hidden scene outdoors by scanning the side of a stone building. The stone patterning of the wall is visible in the indirect measurements, but the reconstruction still robustly recovers the geometry.
{: style="text-align: left;" }

###  Captured Results 
- - -
<div class="row">
<div class="col-xs-6 col-md-4 mx-auto">
<video preload="auto" autoplay muted loop="loop" class="img-fluid" src="" src="/assets/img/publication/siggraph2019lindell/phasor_fields.webm" type="video/webm">
</video>
<p> Virtual Wave Optics Reconstruction </p>
</div>
<div class="col-xs-6 col-md-4 mx-auto">
<video preload="auto" autoplay muted loop="loop" class="img-fluid" src="" src="/assets/img/publication/siggraph2019lindell/teaser_stolt_colorized.webm" type="video/webm">
</video>
<p> f&#8211;k Migration Reconstruction </p>
</div>
</div>
Comparison to non-line-of-sight imaging using phasor-field virtual wave optics by <a href="https://www.nature.com/articles/s41586-019-1461-3">Liu et al. (2019)</a>. The code to run this comparison is available <a href="https://drive.google.com/a/stanford.edu/file/d/1sICEztc2yYt-LI9XSPBEhZDLnS1s7WVa/view?usp=sharing">here</a>.
{: style="text-align: left;" }

<div class="row">
<div class="col-xs-6 col-md-4 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/bike_1.png" class="img-fluid" alt="">
</div>
<div class="col-xs-6 col-md-4 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/bike.gif" class="img-fluid" alt="">
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/dragon_1.png" class="img-fluid" alt="">
</div>
<div class="col-xs-6 col-md-4 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/dragon.gif" class="img-fluid" alt="">
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/statue_1.png" class="img-fluid" alt="">
</div>
<div class="col-xs-6 col-md-4 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/statue.gif" class="img-fluid" alt="">
</div>
</div>
<br>

### Hardware Prototype
- - -
<div class="row">
<div class="col-md-8 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/hardware_all.png" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
<div class="row">
<div class="col-md-8 mx-auto">
<img src="" src="/assets/img/publication/siggraph2019lindell/hardware_closeup.png" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>

<div class="row">
<div class="col-md-8 mx-auto">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" src="/assets/img/publication/siggraph2019lindell/scanning.webm" type="video/webm">
</video>
</div>
</div>

<br>
**Hardware Prototype:** Our hardware prototype captures confocal NLOS measurements with a laser that is 10,000 more powerful than previous systems. The sensor generates timestamps of arriving photons at picosecond time intervals, allowing us to precisely localize features of the hidden geometry.
{: style="text-align: left;" }

### Code and Datasets
It took a lot of effort to build and calibrate this hardware setup and to capture these data. Feel free to use the datasets in your own projects, but please acknowledge our work by citing the following papers:
{: style="text-align: left;" }

<div class="row">
<div class="col-md-3 mx-auto">
<ul class="list-inline">
<li><a href="https://github.com/computational-imaging/nlos-fk">Github Repository</a></li>
<li><a href="https://drive.google.com/a/stanford.edu/file/d/1_av9TdJ-J22qAUNs1ueZ8ETuRRW2KHg_/view?usp=sharing">Full dataset</a></li>
<li><a href="https://drive.google.com/open?id=1W7s6tRzEC42GvW4xS6BfP7_M8iQdYXTv">Bike</a></li>
<li><a href="https://drive.google.com/open?id=1hbn33S5OhcTnVLel3e2pFR_--cOgdvNb">Discoball</a></li>
<li><a href="https://drive.google.com/open?id=1k5z7z6vG5zMeE19WbrvS5WbhgRGmA8Xk">Dragon</a></li>
<li><a href="https://drive.google.com/open?id=1cb5augzU2Gh3M0CpQp3AKlN-C-N0HFI-">Interactive</a></li>
<li><a href="https://drive.google.com/open?id=1kbS5h6iNzCVxDxUPsg7CAEVAYKuwNJES">Non-planar</a></li>
<li><a href="https://drive.google.com/open?id=1J3QB0IXici8JcboR4Haipscg7-vHRM20">Outdoor</a></li>
<li><a href="https://drive.google.com/open?id=1UnZzQpMhYkGiMaQmvPaMvde07AuP-oP5">Phase retrieval</a></li>
<li><a href="https://drive.google.com/open?id=1Aej3ujaNNAyAl2W0wjWJgxqOXiGQTr5W">Resolution chart</a></li>
<li><a href="https://drive.google.com/open?id=1TU7JcRb8ag-dJAidJPCUUIW11xlYf_1c">Statue</a></li>
<li><a href="https://drive.google.com/open?id=1-hhc7e7Lr6ZquVZpZVhqfFQR0d63MWGm">Teaser</a></li>
</ul>
</div>
</div>

<ul>
<li> <p> Matthew O’Toole, Felix Heide, David B. Lindell, Kai Zang, Steven Diamond, and Gordon Wetzstein. 2017. Reconstructing transient images from single-photon sensors. In Proc. CVPR. </p> </li>
<li> <p> Matthew O’Toole, David B. Lindell, and Gordon Wetzstein. 2018. Confocal non-line-of-sight imaging based on the light-cone transform. Nature 555, 7696, 338. </p></li>
<li><p> Felix Heide, Matthew O’Toole, Kai Zang, David B. Lindell, Steven Diamond, and Gordon Wetzstein. 2018. Non-line-of-sight Imaging with partial occluders and surface normals. ACM Trans. Graph.  </p></li>
<li><p> David B. Lindell, Gordon Wetzstein, and Matthew O’Toole. 2019. Wave-based non-line-of-sight Imaging using fast f−k migration. ACM Trans. Graph. (SIGGRAPH) 38, 4, 116.</p></li>
</ul>
{: style="text-align: left;" }


### Acknowledgments
- - -
This project was supported by a Stanford Graduate Fellowship, an NSF CAREER Award (IIS 1553333), a Terman Faculty Fellowship, a Sloan Fellowship, by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant, the Center for Automotive Research at Stanford (CARS), the DARPA REVEAL program, and a PECASE from the ARO.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{Lindell:2019:Wave,
author = {David B. Lindell and Gordon Wetzstein and Matthew O’Toole},
title = {Wave-based non-line-of-sight imaging using fast f--k migration},
journal = {ACM Trans. Graph. (SIGGRAPH)},
volume = {38},
number={4},
pages={116},
year = {2019},
}
{% endraw %}
```
{: style="text-align: left;" }


