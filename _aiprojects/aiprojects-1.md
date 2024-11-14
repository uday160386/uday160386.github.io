---
title: "Photo Sorter"
excerpt: "Utilities to sort photos by facial recognition, remove duplicates and identify the quality of photos.<br/><a href='https://github.com/uday160386/photo-sorter'>repo link..</a>"
collection: aiengineering
tags:
  - python
  - supervised-learning
  - facial-recognition
  - image-recognition
  - remove-duplicates
---

  ## Utilities for sorting photos using facial recognition, removing duplicates, and identifying photo quality.

### First Step:



After cloning this repository, install required packages using the below command.

  
    python3 install -r requirements.txt

### Code:

- RemoveDuplicates: This utility will remove all the duplicate photos from given folder path.

        python RemoveDuplicatePhotos.py --path <Give the path to folder which contains a duplicate images>
   
   
- ImageQualityIdentifier: This utility will help to know about the quality of a image on a scale of 0-100%

        python ImageQualityIdentifier.py --path <Give the path to folder which contains a images>
    
- PhotosByFacialRecognition: This utility will help identify similar photos from a group of photos. It internally uses facial recognition.

        python PhotosByFacialRecognition.py --trainedPath <Give path to the folder with selected photos for training purpose> --sourcePath <Give path to the folder with photos which need to be identified>


### Next Steps?
Work is in progress...