<div align='center'>

## Different deep learning approaches in detecting various abnormalities via Chest X-Ray images
</div>

### Dataset
Our dataset is taken from [VinDr-CXR](https://vindr.ai/datasets/cxr).
<div align='center'>

<img src='assets/dataset.png'>
</div>
Our dataset consists of 18 000 postero-anterior (PA) view Chest X-Rays (CXR) scans from a set of more than 100 000 raw images. They are all annotated by a group of 17 radiologists with at least 8 years of experience.    

Among 18 000 CXR scans, there are 5 000 scans served as training set, and 3 000 others as test set. The original size was `1024 x 1024` but we did resize them into `256 x 256` and change image format from DICOM into PNG.

### Experimental configuration


### Pretrained model
- [YOLOv5x](https://drive.google.com/file/d/1ZckQYba28BkCLZX0ASgvM6THhhEjZTlf/view)
- [DETR](https://drive.google.com/file/d/1BDjRhMsuryTS8oQ6uWRD8RM7Sf7JC547/view)


### Results
<div align='center'>    
    <img style='height: 50%, width: 50%' src='assets/val_batch1_pred.jpg'>
</div>

<div align='center'>

| | Private score (mAP) |
|:--:|:--:|
| Rank 1 | 0.314 |
| Rank 2 | 0.307 | 
| ... | ... |
| Rank 1005 | 0.137 |
| Our YOLOv5 | 0.136 | 
| ... | ... |
| Rank 1099 | 0.064 | 
| Our DETR | 0.062 | 
| ... | ... |
Private score on [Kaggle's VinBigData Chest X-ray Abnormalities Detection contest](https://www.kaggle.com/c/vinbigdata-chest-xray-abnormalities-detection)
</div>

<div style='flex' align='center'>

<img src='assets/train_curve.png'>
<img src='assets/loss_curve.png'>
</div>

