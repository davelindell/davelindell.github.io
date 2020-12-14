---
title: Single-photon 3D imaging with deep sensor fusion 
subtitle: SIGGRAPH 2018  
brief: Capturing 3D geometry with only single photons captured photons per scan position using deep neural networks.
authors: <strong>David B. Lindell</strong>, Matthew O'Toole, Gordon Wetzstein 
layout: pub 
date: 2018-07-15
img: siggraph2018lindell.jpg 
thumbnail: siggraph2018lindell.jpg
permalink: publications/single-photon-3d
alt: image-alt
pdf-link: https://drive.google.com/file/d/1eTIawad7GFob3p5nuxrDcO7FMtL3AzSt/view
supp-link: https://drive.google.com/file/d/1DtFQKKaPoP4Btj1Nv6DowuWC_JBBa-cT/view
video-link: https://www.youtube.com/watch?v=dg_73m4e_Js

---

**Photon efficient 3D imaging using single-photon detectors and deep neural networks.**

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dg_73m4e_Js" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

### Abstract
- - -
Sensors which capture 3D scene information provide useful data for tasks in vehicle navigation, gesture recognition, human pose estimation, and geometric reconstruction. Active illumination time-of-flight sensors in particular have become widely used to estimate a 3D representation of a scene. However, the maximum range, density of acquired spatial samples, or overall acquisition time of these sensors is fundamentally limited by the minimum signal required to estimate depth reliably.
{: style="text-align: left;" }

In this paper, we propose a data-driven method for photon-efficient 3D imaging which leverages sensor fusion and computational reconstruction to rapidly and robustly estimate a dense depth map from low photon counts. Our sensor fusion approach uses measurements of single photon arrival times from a low-resolution single-photon detector array and an intensity image from a conventional high-resolution camera. Using a multi-scale deep convolutional network, we jointly process the raw measurements from both sensors and output a high-resolution depth map. To demonstrate the efficacy of our approach, we implement a hardware prototype and show results using captured data. At low signal-to-background levels our depth reconstruction algorithm with sensor fusion outperforms other methods for depth estimation from noisy measurements of photon arrival times.
{: style="text-align: left;" }

### Slides
- - -
<iframe src="//www.slideshare.net/slideshow/embed_code/key/5nsXEnwWwAnawG" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" class="lazy_load" allowfullscreen> </iframe> 


### Overview
- - -
<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/siggraph2018lindell/cnn_illustration.png" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Convolutional Neural Network architecture for depth estimation and image guided upsampling from captured photon counts and intensity image.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-8 mx-auto">
<img src="/assets/img/publication/siggraph2018lindell/hardware_ps.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
Single-photon imaging prototype showing the imaging optics and illumination optics.
{: style="text-align: left;" }

### Acknowledgments
- - -
This project was supported by a Stanford Graduate Fellowship, a Banting Postdoctoral Fellowship, an NSF CAREER Award (IIS 1553333), a Terman Faculty Fellowship, a Sloan Fellowship, by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant, the Center for Automotive Research at Stanford (CARS), and the DARPA REVEAL program. The authors are grateful to Edoardo Charbon, Pierre-Yves Cattin, and Samuel Burri for providing the LinoSPAD sensor used in this work and continued support of it.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{Lindell:2018:3D,
author = {David B. Lindell and Matthew O’Toole and Gordon Wetzstein},
title = {{Single-Photon {3D} Imaging with Deep Sensor Fusion}},
journal = {ACM Trans. Graph. (SIGGRAPH)},
issue = {37},
number = {4},
year = {2018},
}
{% endraw %}
```
{: style="text-align: left;" }


