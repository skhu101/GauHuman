SEQUENCES=("lan_images620_1300" "marc_images35000_36200" "olek_images0812" "vlad_images1011")
for SEQUENCE in ${SEQUENCES[@]}; do
    dataset="data/monocap/$SEQUENCE"
    python render.py -m output/monocap/${SEQUENCE}_100_pose_correction_lbs_offset_split_clone_merge_prune --motion_offset_flag --smpl_type smpl --actor_gender neutral --iteration 2000
done
