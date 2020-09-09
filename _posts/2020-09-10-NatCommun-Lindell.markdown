---
title: Three-dimensional imaging through scattering media based on confocal diffuse tomography 
subtitle: Nature Communications 
brief: A new computationally efficient method to recover the 3D shape of objects hidden behind a thick scattering layer.
authors: <strong>David B. Lindell</strong>, Gordon Wetzstein
layout: default
modal-id: 2020-6
date: 2020-09-08
img: natcommun2020lindell.png
thumbnail: natcommun2020lindell.png
alt: image-alt
pdf-link: 
supp-link: 
code-link: https://github.com/computational-imaging/confocal-diffuse-tomography  
video-link: https://www.youtube.com/watch?v=uyuCyzV0pdM&feature=emb_title

---

**A new computationally efficient method to recover the 3D shape of objects hidden behind a thick scattering layer.**
{: style="text-align: left;" }

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="lazy_load embed-repsonsive-item" src="" data-src="https://www.youtube.com/embed/uyuCyzV0pdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Abstract
- - -
Optical imaging techniques, such as light detection and ranging (LiDAR), are essential tools in remote sensing, robotic vision, and autonomous driving. However, the presence of scattering places fundamental limits on our ability to image through fog, rain, dust, or the atmosphere. Conventional approaches for imaging through scattering media operate at microscopic scales or require a priori knowledge of the target location for 3D imaging. We introduce a technique that co-designs single-photon avalanche diodes, ultra-fast pulsed lasers, and a new inverse method to capture 3D shape through scattering media. We demonstrate acquisition of shape and position for objects hidden behind a thick diffuser (≈6 transport mean free paths) at macroscopic scales. Our technique, confocal diffuse tomography, may be of considerable value to the aforementioned applications.
{: style="text-align: left;" }

### Imaging through scattering media 
- - -

<img src="" data-src="img/publication/natcommun2020lindell/render.png" style="" class="lazy_load img-responsive modal-img" alt="">
**Schematic of 3D Imaging through scattering media.** a A pulsed laser and timeresolved single-photon detector raster-scan the surface of the scattering medium. b Light diffuses through the medium, is back-reflected by the hidden object, and diffuses back through the medium to the detector. c Returning photons from the hidden object are captured by the detector over time, with earlier arriving photons being gated out (dashed line). SG, scanning galvanometer; BS, beam splitter; OL, objective lens; SPAD, single-photon avalanche diode; TCSPC, time-correlated single-photon counter.
{: style="text-align: left;" }

<img src="" data-src="img/publication/natcommun2020lindell/pipeline.png" style="" class="lazy_load img-responsive modal-img" alt="">
**Overview of reconstruction procedure.** The captured time-resolved measurements (a) are deconvolved with a calibrated diffusion operator to estimate a volume without the effects of diffusive scattering (b). Applying a confocal inverse filter recovers the hidden retroreflective letter ‘S’ (c), which resembles a photograph of the hidden scene (c, bottom).
{: style="text-align: left;" }

### Experimental results 
- - -
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Scene Photo </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Measurements </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/ut_scene.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/letters_ut_measurements_slices.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Gated Imaging </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Confocal Diffuse Tomography </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/letters_ut_gated.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/letters_ut_reconstruction.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>

**Experimental results (Letters “UT”).** The hidden scene is composed of two retroreflective letters (top left). The shape of the letters is completely obscured in the time-resolved measurements, which directly visualize the scattered light returning through the media (top right). Even when time-gating the measurements with a 50 ps window, the shape is obscured (bottom left). Using confocal diffuse tomography, the shape and position of the letters can be recovered (bottom right).
{: style="text-align: left;" }

---

<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Scene Photo </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Measurements </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/cones_scene.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/cones_measurements_slices.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Gated Imaging </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Confocal Diffuse Tomography </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/cones_gated.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/cones_reconstruction.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>

**Experimental results (Traffic Cones).** The hidden scene is composed of three traffic cones (top left). Again, the scene is completely obscured in the time-resolved measurements (top right), even when gating the measurements in a 50 ps time slice (bottom left). Confocal diffuse tomography recovers the positions of the cones (bottom right).
{: style="text-align: left;" }

- - -

<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Scene Photo </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Measurements </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/mannequin_scene.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/mannequin_measurements_slices.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Gated Imaging </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Confocal Diffuse Tomography </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/mannequin_gated.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/mannequin_reconstruction.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>

**Experimental results (Mannequin).** Here, the hidden scenes is a reflective mannequin (top left). Scattering completely obscures the scene in the time-resolved measurements (top right), even when gating the measurements with a 50 ps window (bottom left). Confocal diffuse tomography recovers the shape of the mannequin (bottom right).
{: style="text-align: left;" }

- - -

<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Scene Photo </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Measurements </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/letter_t_scene.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/letter_t_measurements_slices.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<p style="margin-bottom: 0px;"><strong> Gated Imaging </strong></p>
</div>
<div class="col-xs-6 col-md-4">
<p style="margin-bottom: 0px;"><strong> Confocal Diffuse Tomography </strong></p>
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-4 col-md-offset-2">
<img src="" data-src="img/publication/natcommun2020lindell/letter_t_gated.png" class="lazy_load modal-img img-responsive" alt="">
</div>
<div class="col-xs-6 col-md-4">
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 100%; height: auto;" src="" data-src="img/publication/natcommun2020lindell/letter_t_reconstruction.webm" type="video/webm" class="lazy_load">
</video>
</div>
</div>

**Experimental results (Diffuse Letter).** In this case, the scene is a diffuse hidden letter (top left). While the shape of the scene is not visible in the time-resolved measurements because of scattering (top right, bottom left), confocal diffuse tomography recovers its shape (bottom right).
{: style="text-align: left;" }

### Hardware Prototype
- - -

<video preload="auto" autoplay muted loop="loop" style="display: block; width: 50%; height: auto; margin-left: auto; margin-right: auto;" src="" data-src="img/publication/natcommun2020lindell/hardware_scanning.webm" type="video/webm" class="lazy_load">
</video>
**Confocal Scanning.** The hardware prototype raster scans the surface of the scattering media, a 25 mm thick piece of opaque foam. A time-resolved detector captures the light that scatters through the media to the hidden object and back to the illuminated point.
{: style="text-align: left;" }

<img src="" data-src="img/publication/natcommun2020lindell/hardware.png" class="lazy_load modal-img img-responsive" alt="">
**Hardware Prototype.** The primary components of the hardware prototype consist of a pulsed laser which shares an optical path through a beam splitter with a single-pixel single-photon avalanche diode. The system captures the time of arrival of backscattered photons with a timing resolution on the order of tens of picoseconds.
{: style="text-align: left;" }

### Acknowledgments
- - -
This project is supported by a Stanford Graduate Fellowship in Science and Engineering, a National Science Foundation CAREER award (IIS 1553333), a Sloan Fellowship, the DARPA REVEAL program, a PECASE form the ARO, and by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{Lindell:2020:CDT,
title={Three-dimensional imaging through scattering media based on confocal diffuse tomography},
author={Lindell, David B and Wetzstein, Gordon},
journal={Nat. Commun.},
volume={11},
number={1},
pages={1–13},
year={2020},
publisher={Nature Publishing Group}
}
{% endraw %}
```
{: style="text-align: left;" }

- - -

### Related Projects 
<p style="text-align: left; margin-bottom: 3px;"> You may also be interested in related projects, where we have developed non-line-of-sight imaging systems:
<ul style="text-align: left;">
<li><a href="#publication-2020-1" data-dismiss="modal" data-toggle="modal">Young et al. 2020. Non-line-of-sight Surface Reconstruction using the Directional Light-cone Transform. CVPR</a></li>
<li><a href="#publication-2019-3" data-dismiss="modal" data-toggle="modal">Lindell et al. 2019. Wave-based Non-line-of-sight Imaging using Fast f-k Migration. ACM SIGGRAPH</a></li>
<li><a href="#publication-2019-1" data-dismiss="modal" data-toggle="modal">Heide et al. 2019. Non-line-of-sight Imaging with Partial Occluders and Surface Normals. ACM Transactions on Graphics (presented at SIGGRAPH)</a></li>
<li><a href="#publication-2019-2" data-dismiss="modal" data-toggle="modal">Lindell et al. 2019. Acoustic Non-line-of-sight Imaging. CVPR</a></li>
<li><a href="#publication-2018-1" data-dismiss="modal" data-toggle="modal">O’Toole et al. 2018. Confocal Non-line-of-sight Imaging based on the Light-cone Transform. Nature</a></li>
</ul>
</p>

<p style="text-align: left; margin-bottom: 3px;"> and direct line-of-sight or transient imaging systems:
<ul style="text-align: left;">
<li><a href="#publication-2020-3" data-dismiss="modal" data-toggle="modal">Bergman et al. 2020. Deep Adaptive LiDAR: End-to-end Optimization of Sampling and Depth Completion at Low Sampling Rates. ICCP</a></li>
<li><a href="#publication-2018-4" data-dismiss="modal" data-toggle="modal">Heide et al. 2019. Sub-picosecond photon-efficient 3D imaging using single-photon sensors. Scientific Reports</a></li>
<li><a href="#publication-2018-3" data-dismiss="modal" data-toggle="modal">Lindell et al. 2018. Single-Photon 3D Imaging with Deep Sensor Fusions. ACM SIGGRAPH</a></li>
<li><a href="#publication-2017-1" data-dismiss="modal" data-toggle="modal">O’Toole et al. 2017. Reconstructing Transient Images from Single-Photon Sensors. CVPR</a></li>
</ul>
</p>