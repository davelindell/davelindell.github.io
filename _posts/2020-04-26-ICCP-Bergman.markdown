---
title: "Deep adaptive LIDAR: End-to-end optimization of sampling and depth completion at low sampling rates"
subtitle: ICCP 2020 
brief: An end-to-end differentiable depth imaging system which jointly optimizes the LiDAR scanning pattern and sparse depth inpainting.
authors: Alexander W. Bergman, <strong>David B. Lindell</strong>, Gordon Wetzstein 
layout: pub 
date: 2020-04-26
img: iccp2020bergman.png 
thumbnail: iccp2020bergman.png 
permalink: publications/adaptive-lidar
alt: image-alt
pdf-link: http://www.computationalimaging.org/wp-content/uploads/2020/03/deep-adaptive-lidar.pdf 
supp-link: http://www.computationalimaging.org/wp-content/uploads/2020/03/deep-adaptive-lidar-supp.pdf
code-link: https://github.com/alexanderbergman7/deep-adaptive-LiDAR 
pres-link: https://youtu.be/9WAz9Y9gXgM?t=1920 

---

**An end-to-end differentiable depth imaging system which jointly optimizes the LiDAR scanning pattern and sparse depth inpainting.**
{: style="text-align: left;" }

### Abstract
- - -
Current LiDAR systems are limited in their ability to capture dense 3D point clouds. To overcome this challenge, deep learning-based depth completion algorithms have been developed to inpaint missing depth guided by an RGB image. However, these methods fail for low sampling rates. Here, we propose an adaptive sampling scheme for LiDAR systems that demonstrates state-of-the-art performance for depth completion at low sampling rates. Our system is fully differentiable, allowing the sparse depth sampling and the depth inpainting components to be trained end-to-end with an upstream task.
{: style="text-align: left;" }

### Network Model 
- - -
<img src="" src="/assets/img/publication/iccp2020bergman/dal_methods_figure.png" style="padding: 10px;" class="img-fluid" alt="">

The deep adaptive LiDAR model takes as input an RGB image and predicts an optimal sampling pattern and reconstructed dense depth from sampling at these locations. A pre-trained monocular depth estimation network is used to make an initial estimate of depth in the scene. A U-Net is used to extract a sampling importance vector field, which is then integrated and used for sampling from the scene. Another U-Net is used to fuse the coarsely inpainted sparse depth samples with the monocular depth estimate in order to predict the dense depth.
{: style="text-align: left;" }

### Adaptive Sampling
- - -
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 60%; margin-left: auto; margin-right: auto;" src="" src="/assets/img/publication/iccp2020bergman/sample1.webm" type="video/webm" class="lazy_load">
</video>
<video preload="auto" autoplay muted loop="loop" style="display: block; width: 60%; margin-left: auto; margin-right: auto;" src="" src="/assets/img/publication/iccp2020bergman/sample2.webm" type="video/webm" class="lazy_load">
</video>
<br>
**Optimal sampling patterns:** Depth estimations and predicted sparse sampling patterns for the KITTI validation dataset. The left column contains RGB image and ground truth depth measurements, and the right column contains the reconstructed depth images and the predicted sparse sampling patterns in order to reconstruct those depth images. RMSE is measured in millimeters.
{: style="text-align: left;" }

### Depth Completion
NYU-v2 and KITTI Examples
- - -
<img src="" src="/assets/img/publication/iccp2020bergman/kitti_comparison_figure.png" style="padding: 10px;" class="img-fluid" alt="">
<img src="" src="/assets/img/publication/iccp2020bergman/nyu_comparison_figure.png" style="padding: 10px;" class="img-fluid" alt="">

**Depth completion results:** (Top) Depth completion examples with RMSE (m) from the NYU-Depth-v2 dataset with comparisons to state-of-the-art depth completion methods. These results were obtained with an average of 50 samples per image. (Bottom) Depth completion examples with RMSE (mm) from the KITTI dataset with comparisons to state-of-the-art depth completion methods. These results were obtained with an average of 156 samples per image. Even when our method is out-performed, our reconstructed depth images still capture high frequency depth features with more accuracy. 
{: style="text-align: left;" }

### Acknowledgments 
- - -
A.W.B. and D.B.L. are supported by a Stanford Graduate Fellowship in Science and Engineering. This project was supported by a Terman Faculty Fellowship, a Sloan Fellowship, a NSF CAREER Award (IIS 1553333), the DARPA REVEAL program, the ARO (ECASE-Army Award W911NF19-1-0120), and by the KAUST Office of Sponsored Research through the Visual Computing Center CCF grant.
{: style="text-align: left;" }

### Citation
- - -
```
{% raw %}
@inproceedings{Bergman:2020:DeepLiDAR,
author={Alexander W. Bergman and David B. Lindell and Gordon Wetzstein},
journal={Proc. IEEE ICCP},
title={{Deep Adaptive {LiDAR}: End-to-end Optimization of Sampling and Depth Completion at Low Sampling Rates}},
year={2020},
}
{% endraw %}
```
{: style="text-align: left;" }
