---
title: 3D imaging with an RGB camera and a single SPAD transient 
subtitle: ECCV 2020
brief: Adding minimal additional hardware significantly improves monocular depth estimation using a single RGB camera.
authors: Mark Nishimura, <strong>David B. Lindell</strong>, Christopher Metzler, Gordon Wetzstein
layout: pub 
date: 2020-8-25
img: eccv2020nishimura.jpg
thumbnail: eccv2020nishimura.jpg
permalink: publications/monocular-spad 
alt: image-alt
pdf-link: http://www.computationalimaging.org/wp-content/uploads/2020/07/eccv2020.pdf
supp-link: https://drive.google.com/file/d/1O7LSTxbJW-AhgbgKeYwH5fVb0_eeqT00/view?usp=sharing
code-link: https://github.com/computational-imaging/single_spad_depth 

---

**Adding minimal additional hardware significantly improves monocular depth estimation using a single RGB camera.**
{: style="text-align: left;" }

### Video
- - -
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="" src="https://www.youtube.com/embed/j91H56iqxJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>
### Abstract
- - -
Monocular depth estimation algorithms successfully predict the relative depth order of objects in a scene. However, because of the fundamental scale ambiguity associated with monocular images, these algorithms fail at correctly predicting true metric depth. In this work, we demonstrate how a depth histogram of the scene, which can be readily captured using a single-pixel time-resolved detector, can be fused with the output of existing monocular depth estimation algorithms to resolve the depth ambiguity problem. We validate this novel sensor fusion technique experimentally and in extensive simulation. We show that it significantly improves the performance of several state-of-the-art monocular depth estimation algorithms.
{: style="text-align: left;" }


<img src="" src="/assets/img/publication/eccv2020nishimura/overview.jpg" style="" class="img-fluid" alt="">

**Overview:** Monocular depth estimation predicts a depth map (lower left) from a single RGB image (top right). The ill-posedness of the problem prevents reliable absolute depth estimation, resulting in large errors (inset images). The proposed method uses a single transient measurement aggregating the time-of-fight information of the entire scene (top left) to correct the output of the depth estimation and optimize the quality of the estimated absolute depth (lower right). 
{: style="text-align: left;" }

<img src="" src="/assets/img/publication/eccv2020nishimura/pipeline.jpg" style="padding: 0px;" class="img-fluid" alt="">

**Processing pipeline.** The pipeline uses the input transient measurement and an RGB image to produce an accurate depth map. The transient is pre-processed to adjust for ambient photon detections, radiometric falloff factors, and to calibrate the bin widths. From the RGB image, an MDE estimates an initial depth map and the scene refectance is estimated. A reflectance-weighted depth histogram is compared to the processed transient to calculate a histogram matching matrix which is used to output the corrected depth.
{: style="text-align: left;" }

<img src="" src="/assets/img/publication/eccv2020nishimura/results.jpg" style="padding: 0px;" class="img-fluid" alt="">

**Simulated results.** Simulated results from NYU Depth v2 computed with the DenseDepth CNN. The depth maps estimated by the CNN are reasonable, but contain systematic error. Oracle access to the ground truth depth maps, either through the median depth or the depth histogram, can remove this error and correct the depth maps. The proposed method uses a single transient measurement and does not rely on ground truth depth, but it achieves a quality that closely matches the best-performing oracle. 
{: style="text-align: left;" }

<img src="" src="/assets/img/publication/eccv2020nishimura/hardware.jpg" style="padding: 0px;" class="img-fluid" alt="">

**Hardware prototype.** Prototype scanning setup. The pulsed light from the laser travels through a beam splitter before being guided by the galvo to the scene. Returning light is measured by the single-pixel SPAD. The Kinect v2 RGB camera is used to capture the image used to generate the monocular depth estimate (the depth camera is not used).
{: style="text-align: left;" }

<img src="" src="/assets/img/publication/eccv2020nishimura/captured1.jpg" style="padding: 0px;" class="img-fluid" alt="">

**Experimental results.** For each scene, we record a ground truth depth map that is raster-scanned with the SPAD (upper left subimages), and an RGB image (upper right subimages). A monocular depth CNN predicts an initial depth map (top middle left subimages), which is corrected with the digitally aggregated SPAD histogram using the proposed method (bottom left subimages), as shown by the error maps and root mean squared error (RMSE) for each example (middle left, bottom subimages). The CNN is confused when we show it a photograph of a poster (rightmost scene); it incorrectly predicts the depth of the scene depicted on the flat print. Our method is able to correct this error. 
{: style="text-align: left;" }

<img src="" src="/assets/img/publication/eccv2020nishimura/captured2.jpg" style="padding: 0px;" class="img-fluid" alt="">

**Additional captured scene.** Captured result comparing the direct output of the MiDaS MDE and depth maps corrected by our method using the digitally aggregated transient of the scanned SPAD (center right) and a single transient captured by an optically diffused SPAD and laser (right). Both of these approaches result in very similar results and both are significantly better than the output of the MDE, as shown by the error maps in the insets. The diffused SPAD results are captured at ~25mW laser power indoors.
{: style="text-align: left;" }

### Acknowledgments
- - -
D.B.L. was supported by a Stanford Graduate Fellowship. C.M. was supported by an ORISE Intelligence Community Postdoctoral Fellowship. G.W. was supported by an NSF CAREER Award (IIS 1553333), a Sloan Fellowship, by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant, and a PECASE by the ARL.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@inproceedings{Nishimura:2020,
author={M. Nishimura and D. B. Lindell and C. Metzler and G. Wetzstein},
booktitle={Proc. ECCV},
title={{Disambiguating Monocular Depth Estimation with a Single Transient}},
year={2020},
}
{% endraw %}
```
{: style="text-align: left;" }
