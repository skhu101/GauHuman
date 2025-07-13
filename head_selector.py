from smpl.smpl_numpy import SMPL 

smpl_model = SMPL(sex='neutral', model_dir='assets/SMPL_NEUTRAL.pkl')

print(smpl_model.vertices)






print("done!")