dataset="data/zju_mocap_refine/my_377"
python train.py -s $dataset --eval --exp_name zju_mocap_refine/${SEQUENCE}_100_pose_correction_lbs_offset_split_clone_merge_prune --motion_offset_flag --smpl_type smpl --actor_gender neutral --iterations 120 

