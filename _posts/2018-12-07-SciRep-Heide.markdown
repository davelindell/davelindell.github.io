---
title: Sub-picosecond photon-efficient 3D imaging using single-photon sensors 
subtitle: Scientific Reports (2018) 
brief: State-of-the-art depth estimation with pileup correction for single-photon avalanche diodes.
authors: Felix Heide, Steven Diamond, <strong>David B. Lindell</strong>, Gordon Wetzstein
layout: pub 
date: 2018-12-07
img: scirep2018heide.png
thumbnail: scirep2018heide.png
permalink: publications/spad-pileup
alt: image-alt
pdf-link: https://www.nature.com/articles/s41598-018-35212-x 
supp-link: https://static-content.springer.com/esm/art%3A10.1038%2Fs41598-018-35212-x/MediaObjects/41598_2018_35212_MOESM1_ESM.pdf 

---

**State-of-the-art depth estimation with pileup correction for single-photon avalanche diodes.**
{: style="text-align: left;" }

### Abstract
- - -

Active 3D imaging systems have broad applications across disciplines, including biological imaging, remote sensing and robotics. Applications in these domains require fast acquisition times, high timing accuracy, and high detection sensitivity. Single-photon avalanche diodes (SPADs) have emerged as one of the most promising detector technologies to achieve all of these requirements. However, these detectors are plagued by measurement distortions known as pileup, which fundamentally limit their precision. In this work, we develop a probabilistic image formation model that accurately models pileup. We devise inverse methods to efficiently and robustly estimate scene depth and reflectance from recorded photon counts using the proposed model along with statistical priors. With this algorithm, we not only demonstrate improvements to timing accuracy by more than an order of magnitude compared to the state-of-the-art, but our approach is also the first to facilitate sub-picosecond-accurate, photon-efficient 3D imaging in practical scenarios where widely-varying photon counts are observed.
{: style="text-align: left;" }

### Results
- - -
**Sub-picosecond 3D Imaging Framework (see above image).** (a) A collimated, pulsed laser illuminates the scene at a single point. The laser is laterally scanned using a 2-axis mirror galvanometer. Timing and control electronics time-stamp each detected photon arrival relative to the last emitted pulse and accumulate these events in a histogram of spatio-temporal photon counts (b). This histogram is processed to estimate both refectivity and depth information (c). Two points are highlighted, one corresponding to high-flux (d) and the other to low-flux (e) measurements. Whereas the latter are noisy, high-flux measurements suffer from pileup distortion which introduce a significant bias for the depth estimation of conventional algorithms. The proposed estimation method accurately models both of these scenarios, allowing for reflectance information and travel time to be estimated with sub-picosecond accuracy from severely distorted measurements.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/scirep2018heide/pileup2.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
**Experimental reconstructions.** A recorded spatio-temporal distribution of photon counts (a,e) is processed to estimate a 3D point cloud (b,c,f,g) that contains both depth and albedo information, here shown for two different scenes (photographs shown in (d,h)). The color-coded errors maps (d,h) directly compare the results of several depth estimation techniques, including log-matched filtering, Coates’ method followed by Gaussian fit (on high-flux measurement), and the proposed method.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/scirep2018heide/pileup3.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
**Experimental validation of sub-picosecond accuracy on recorded single-pixel data without spatial priors.** The average depth and round-trip time error for two scenes are shown, for the 450nm Alphalas LD450-50 laser (FWHM of 90ps) and the 670nm Alphalas LD-670-50 laser (FWHM of 50ps), respectively. The background level is 5% for all scenes. We compare reconstructions of the conventional log-matched filter estimate, Coates’ method followed by a Gaussian fit, Shin et al. on Coates-corrected measurements, and the proposed method.
{: style="text-align: left;" }

<div class="row">
<div class="col-md-10 mx-auto">
<img src="/assets/img/publication/scirep2018heide/pileup4.jpg" style="padding: 10px;" class="img-fluid" alt="">
</div>
</div>
**Optimal photon count regime.** Depth reconstruction accuracy for varying photon counts for the 450nm Alphalas LD-450-50 laser (FWHM of 90ps). The conventional log-matched filter, Coates’ method, and the proposed method are compared. The optimal number of photon counts lies around the unconventional region of 1 photon detected per pulse on average, independent of the impulse response and for a broad range of histogram bin widths, see Supplemental Results.
{: style="text-align: left;" }

### Acknowledgments
- - -
This work was in part supported by a National Science Foundation CAREER award (IIS 1553333), by a Sloan Fellowship, by the DARPA REVEAL program, and by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant. The authors would like to thank Rafael Setra, Kai Zang, Matthew O’Toole, Amy Fritz, and Mark Horowitz for fruitful discussions in early stages of this project. S.D. was supported by a National Science Foundation Graduate Research Fellowship and D.B.L. was supported by a Stanford Graduate Fellowship in Science and Engineering.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@article{Heide:2018:pileup,
author = {Felix Heide and Steven Diamond and David B. Lindell and Gordon Wetzstein},
title = {Sub-picosecond photon-efficient {3D} imaging using single-photon sensors},
journal = {Scientific Reports},
issue = {17726},
year = {2018}
}
{% endraw %}
```
{: style="text-align: left;" }


