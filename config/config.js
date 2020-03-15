module.exports = {
  development: {
    username: 'hackathon',
    password: '',
    database: 'runregistry_database',
    host: process.env.DOCKER_POSTGRES ? 'postgres' : 'localhost',
    // host: 'localhost',
    logging: false,
    dialect: 'postgres',
    define: {
      // Make sequelize not pluralize the name of tables:
      freezeTableName: true
    },
    pool: {
      max: 30,
      min: 0,
      idle: 20000,
      acquire: 2000000
    },
    WAITING_DQM_GUI_CONSTANT: 'waiting dqm gui',
    API_URL: 'http://localhost:9500',
    OMS_URL: `https://cmsoms.cern.ch/agg/api/v1`,
    REDIS_URL: `redis://redis:6379`,
    OMS_RUNS: (number_of_runs = 10) =>
      `runs?sort=-last_update&page[limit]=${number_of_runs}`,
    OMS_SPECIFIC_RUN: run_number => `runs?filter[run_number]=${run_number}`,
    OMS_LUMISECTIONS: run_number =>
      `lumisections?filter[run_number]=${run_number}&page[limit]=5000`,
    RUNS_PER_API_CALL: 49,
    SECONDS_PER_API_CALL: 30,
    DBS_URL: 'https://cmsweb.cern.ch/dbs/prod/global',
    DBS_DATASETS: run_number => `DBSReader/datasets?run_num=${run_number}`,
    SECONDS_PER_DBS_CHECK: 6010,
    DQM_GUI_URL: 'https://cmsweb.cern.ch/dqm/offline/data/json/samples?match=',
    SECONDS_PER_DQM_GUI_CHECK: 6000
  },
  staging: {
    username: 'admin',
    password: 'changeme',
    database: 'runregistry_database_dev',
    logging: false,
    host: 'dbod-gc005.cern.ch',
    dialect: 'postgres',
    port: 6601,
    define: {
      // Make sequelize not pluralize the name of tables:
      freezeTableName: true
    },
    WAITING_DQM_GUI_CONSTANT: 'waiting dqm gui',
    API_URL: 'http://localhost:9500',
    OMS_URL: `https://cmsoms.cern.ch/agg/api/v1`,
    REDIS_URL: `redis://dev-rr-redis.runregistry.svc.cluster.local`,
    OMS_RUNS: (number_of_runs = 10) =>
      `runs?sort=-last_update&page[limit]=${number_of_runs}`,
    OMS_SPECIFIC_RUN: run_number => `runs?filter[run_number]=${run_number}`,
    OMS_LUMISECTIONS: run_number =>
      `lumisections?filter[run_number]=${run_number}&page[limit]=5000`,
    RUNS_PER_API_CALL: 6,
    SECONDS_PER_API_CALL: 3600,
    DBS_URL: 'https://cmsweb.cern.ch/dbs/prod/global',
    DBS_DATASETS: run_number => `DBSReader/datasets?run_num=${run_number}`,
    SECONDS_PER_DBS_CHECK: 3600,
    DQM_GUI_URL: 'https://cmsweb.cern.ch/dqm/offline/data/json/samples?match=',
    SECONDS_PER_DQM_GUI_CHECK: 3600
  },
  production: {
    username: 'admin',
    password: 'changeme',
    database: 'runregistry_database',
    logging: false,
    host: 'dbod-gc005.cern.ch',
    dialect: 'postgres',
    port: 6601,
    define: {
      // Make sequelize not pluralize the name of tables:
      freezeTableName: true
    },
    WAITING_DQM_GUI_CONSTANT: 'waiting dqm gui',
    API_URL: 'http://localhost:9500',
    OMS_URL: `https://cmsoms.cern.ch/agg/api/v1`,
    REDIS_URL: `redis://rr-redis.runregistry.svc.cluster.local`,
    OMS_RUNS: (number_of_runs = 10) =>
      `runs?sort=-last_update&page[limit]=${number_of_runs}`,
    OMS_SPECIFIC_RUN: run_number => `runs?filter[run_number]=${run_number}`,
    OMS_LUMISECTIONS: run_number =>
      `lumisections?filter[run_number]=${run_number}&page[limit]=5000`,
    RUNS_PER_API_CALL: 6,
    SECONDS_PER_API_CALL: 180,
    DBS_URL: 'https://cmsweb.cern.ch/dbs/prod/global',
    DBS_DATASETS: run_number => `DBSReader/datasets?run_num=${run_number}`,
    SECONDS_PER_DBS_CHECK: 3600,
    DQM_GUI_URL: 'https://cmsweb.cern.ch/dqm/offline/data/json/samples?match=',
    SECONDS_PER_DQM_GUI_CHECK: 40
  },
  kubernetes: {
    username: 'admin',
    password: 'changeme',
    database: 'runregistry_database',
    logging: false,
    host: 'dbod-gc005.cern.ch',
    dialect: 'postgres',
    port: 6601,
    define: {
      // Make sequelize not pluralize the name of tables:
      freezeTableName: true
    },
    WAITING_DQM_GUI_CONSTANT: 'waiting dqm gui',
    API_URL: 'http://runregistry-api:8351',
    OMS_URL: `https://cmsoms.cern.ch/agg/api/v1`,
    REDIS_URL: `redis://rr-redis:8352`,
    OMS_RUNS: (number_of_runs = 10) =>
      `runs?sort=-last_update&page[limit]=${number_of_runs}`,
    OMS_SPECIFIC_RUN: run_number => `runs?filter[run_number]=${run_number}`,
    OMS_LUMISECTIONS: run_number =>
      `lumisections?filter[run_number]=${run_number}&page[limit]=5000`,
    RUNS_PER_API_CALL: 6,
    SECONDS_PER_API_CALL: 18000,
    DBS_URL: 'https://cmsweb.cern.ch/dbs/prod/global',
    DBS_DATASETS: run_number => `DBSReader/datasets?run_num=${run_number}`,
    SECONDS_PER_DBS_CHECK: 3600,
    DQM_GUI_URL: 'https://cmsweb.cern.ch/dqm/offline/data/json/samples?match=',
    SECONDS_PER_DQM_GUI_CHECK: 40
  },

  // The online components are also the rr_lumisection_whitelist
  certifiable_offline_components: {
    btag: ['btag'],
    castor: ['castor'],
    cms: ['cms'],
    csc: ['csc'],
    ctpps: ['ctpps'],
    dc: ['lowlumi'],
    dt: ['dt'],
    ecal: ['ecal', 'es'],
    egamma: ['egamma'],
    hcal: ['hcal'],
    hlt: ['hlt'],
    jetmet: ['jetmet'],
    l1t: ['l1t', 'l1tmu', 'l1tcalo'],
    lumi: ['lumi'],
    muon: ['muon'],
    rpc: ['rpc'],
    tau: ['tau'],
    tracker: ['track', 'pixel', 'strip']
  },

  certifiable_online_components: {
    castor: ['castor'],
    cms: ['cms'],
    csc: ['csc'],
    ctpps: ['ctpps'],
    dt: ['dt'],
    ecal: ['ecal', 'es'],
    hcal: ['hcal'],
    hlt: ['hlt'],
    l1t: ['l1t', 'l1tcalo', 'l1tmu'],
    lumi: ['lumi'],
    rpc: ['rpc'],
    tracker: ['pixel', 'strip']
  },
  // This are the attributes we save from OMS lumisections:
  oms_lumisection_whitelist: [
    'rp_time_ready',
    'cscp_ready',
    'physics_flag',
    'dt0_ready',
    'beam1_present',
    'bpix_ready',
    'ho_ready',
    'dtp_ready',
    'tecm_ready',
    'tibtid_ready',
    'fpix_ready',
    'rpc_ready',
    'rp_sect_56_ready',
    'castor_ready',
    'esp_ready',
    'eep_ready',
    'hbhea_ready',
    'ebm_ready',
    'dtm_ready',
    'eem_ready',
    'esm_ready',
    'tecp_ready',
    'ebp_ready',
    'hf_ready',
    'rp_sect_45_ready',
    'cscm_ready',
    'cms_active',
    'zdc_ready',
    'hbheb_ready',
    'tob_ready',
    'beam1_stable',
    'hbhec_ready',
    'beam2_stable',
    'beam2_present'
  ],
  oms_lumisection_luminosity_whitelist: [
    // TODO: When OMS provides us with lumisection granular luminosity then we put the attribute here (not the aggregated one). And then there is no need to calculate it from brilcalc using their pip package
    // For now we use brilcalc:
    'recorded',
    'delivered'
  ]
};
