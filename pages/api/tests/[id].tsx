const tests = [
  {
    id: 1,
    name: "EXAMPLE_test_1",
    config: {
      createdAt: "2022-03-26T14:58:23.000Z",
      version: 0,
      snapshotId: 506,
      configVer: 8978,
      testConfig: {
        reporting: {
          metric_model_id: "abra_app",
        },
        config: [
          {
            active: true,
            integrations: ["ios-core-prd", "ios-core-stg"],
            allocate_by: {
              parameter: "abtest_by_agent_id",
              variants: [
                {
                  variant: "0_control",
                  weight: "0%",
                },
                {
                  variant: "1_offer",
                  weight: "100%",
                },
              ],
              abtest_partitioning_key: "APP_2021H1_PLO",
            },
            targeting: true,
            targeting_criteria: {
              mobile_interface_idiom: {
                is: "phone",
              },
            },
          },
          {
            active: true,
            integrations: ["android-core-prd", "android-core-stg"],
            allocate_by: {
              parameter: "abtest_by_agent_id",
              variants: [
                {
                  variant: "1_offer",
                  weight: "0%",
                },
                {
                  variant: "0_control",
                  weight: "0%",
                },
                {
                  variant: "1_offer",
                  weight: "100%",
                },
              ],
              abtest_partitioning_key: "APP_2021H1_PLO",
            },
            targeting: true,
            targeting_criteria: {
              smallest_width: {
                less_than: 600,
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    name: "EXAMPLE_test_2",
    config: {
      createdAt: "2022-03-26T14:58:23.000Z",
      version: 0,
      snapshotId: 506,
      configVer: 8978,
      testConfig: {
        reporting: {
          metric_model_id: "abra_app",
        },
        config: [
          {
            active: true,
            integrations: ["ios-core-prd", "ios-core-stg"],
            allocate_by: {
              parameter: "abtest_by_agent_id",
              variants: [
                {
                  variant: "0_control",
                  weight: "0%",
                },
                {
                  variant: "1_offer",
                  weight: "100%",
                },
              ],
              abtest_partitioning_key: "APP_2021H1_PLO",
            },
            targeting: true,
            targeting_criteria: {
              mobile_interface_idiom: {
                is: "phone",
              },
            },
          },
          {
            active: true,
            integrations: ["android-core-prd", "android-core-stg"],
            allocate_by: {
              parameter: "abtest_by_agent_id",
              variants: [
                {
                  variant: "1_offer",
                  weight: "0%",
                },
                {
                  variant: "0_control",
                  weight: "0%",
                },
                {
                  variant: "1_offer",
                  weight: "100%",
                },
              ],
              abtest_partitioning_key: "APP_2021H1_PLO",
            },
            targeting: true,
            targeting_criteria: {
              smallest_width: {
                less_than: 600,
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 3,
    name: "EXAMPLE_test_3",
    config: {
      createdAt: "2022-03-26T14:58:23.000Z",
      version: 0,
      snapshotId: 506,
      configVer: 8978,
      testConfig: {
        reporting: {
          metric_model_id: "abra_app",
        },
        config: [
          {
            active: true,
            integrations: ["ios-core-prd", "ios-core-stg"],
            allocate_by: {
              parameter: "abtest_by_agent_id",
              variants: [
                {
                  variant: "0_control",
                  weight: "0%",
                },
                {
                  variant: "1_offer",
                  weight: "100%",
                },
              ],
              abtest_partitioning_key: "APP_2021H1_PLO",
            },
            targeting: true,
            targeting_criteria: {
              mobile_interface_idiom: {
                is: "phone",
              },
            },
          },
          {
            active: true,
            integrations: ["android-core-prd", "android-core-stg"],
            allocate_by: {
              parameter: "abtest_by_agent_id",
              variants: [
                {
                  variant: "1_offer",
                  weight: "0%",
                },
                {
                  variant: "0_control",
                  weight: "0%",
                },
                {
                  variant: "1_offer",
                  weight: "100%",
                },
              ],
              abtest_partitioning_key: "APP_2021H1_PLO",
            },
            targeting: true,
            targeting_criteria: {
              smallest_width: {
                less_than: 600,
              },
            },
          },
        ],
      },
    },
  },
];

export default function userHandler(req, res) {
    const {
      query: { id },
      method,
    } = req

    let name = ""
    let config = {}

    tests.forEach((test)=>{
      if (test.id == id){
        name = test.name
        config = test.config
      }
    })
  
    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json({ id, name, config })
        break
      case 'PUT':
        // Update or create data in your database
        res.status(200).json({ id, name, config })
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }